import React, { Component } from 'react';
import '../css/MemberForm.css';

const databaseURL = "https://sakura-project-68d19-default-rtdb.firebaseio.com/";

let selectYear;
let selectMonth;
let selectDay_type1;
let selectDay_type2;
let selectDay_type3;

class MemberForm extends Component {
    state = {
        Member: {},
        UserID: '',
        UserPW: '',
        UserName: '',
        Birth: '',
        Address: '',
        Phone: '',
        Unlock: '',

        birthYear: '',
        birthMonth: '',
        birthDay: '',
        selectMonth: '',
        selectDay: '',

        zipCode1: '',
        zipCode2: '',
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        address5: '',

        phone1: '',
        phone2: '',
        phone3: '',

        idMessage: '4字以上の文字で入力してください。',
        pwMessage: '6字以上の文字で入力してください。',
        nameMessage: '',
        birthMessage: '',
        addrMessage: '',
        phoneMessage: ''
    }

    calendar(){
        let year = [];
        let month = [];
        let dayType1 = [];
        let dayType2 = [];
        let dayType3 = [];

        for(let i=2021; i>1920; i--)
            year.push(i);
        for(let i=1; i<=12; i++){
            if(i<10) month.push('0' + i);
            else month.push(i);
        }
        for(let i=1; i<=28; i++){
            if(i<10) dayType1.push('0' + i);
            else dayType1.push(i);
        }
        for(let i=1; i<=30; i++){
            if(i<10) dayType2.push('0' + i);
            else dayType2.push(i);
        }
        for(let i=1; i<=31; i++){
            if(i<10) dayType3.push('0' + i);
            else dayType3.push(i);
        }

        selectYear = year.map((year, index) => <option key={index} value={year}>{year}</option>);
        selectMonth = month.map((month, index) => <option key={index} value={month}>{month}</option>);
        selectDay_type1 = dayType1.map((dayType1, index) => <option key={index} value={dayType1}>{dayType1}</option>);
        selectDay_type2 = dayType2.map((dayType2, index) => <option key={index} value={dayType2}>{dayType2}</option>);
        selectDay_type3 = dayType3.map((dayType3, index) => <option key={index} value={dayType3}>{dayType3}</option>);
    }

    startFocus(){
        this.input.focus();
    }

    _get(){
        fetch(`${databaseURL}/Member.json`).then(res => {
          if(res.status !== 200){
            throw new Error(res.statusText);
          }
          return res.json();
        }).then(Member => this.setState({Member: Member}));
    }

    componentDidMount(){
        this.calendar();
        this.startFocus();
        this._get();
    }
    
    _post(Member){
        return fetch(`${databaseURL}/Member.json`, {
            method: 'POST',
            body: JSON.stringify(Member)
        }).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
          return res.json();
        }).then(data =>{
            alert('アカウントが出来ました。');
            // login페이지로 이동
            this.props.history.push('/');
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

            //**********주소 자동완성 api로 받은 값 세팅************/
            address1: document.getElementById('address1').value,
            address2: document.getElementById('address2').value,
            address3: document.getElementById('address3').value,
            //****************************************************/
        });

        // 생년월일 '년도' 선택시 1~12월 select box에 셋팅
        if(e.target.name === 'birthYear'){
            
            let birthYear = document.getElementById('birthYear');
            birthYear = birthYear.options[birthYear.selectedIndex].value;
            if(birthYear.length !==0) {
                this.setState({
                    selectMonth: selectMonth
                })
            }
        }

        // 생년월일 '월' 선택시 해당하는 일수로 select box 셋팅
        if(e.target.name === 'birthMonth'){

            let birthMonth = document.getElementById('birthMonth');
            birthMonth = birthMonth.options[birthMonth.selectedIndex].value;
            switch(birthMonth) {
                case "":
                    break;
                case "02":
                    this.setState({
                        selectDay: selectDay_type1
                    });
                    break;
                case "04":
                case "06":
                case "09":
                case "11":
                    this.setState({
                        selectDay: selectDay_type2
                    });
                    break;
                default:
                    this.setState({
                        selectDay: selectDay_type3
                    });
            }
        }
    }

    // 우편번호로 주소 완성하기
    fillAddr = () => {
        const { AjaxZip3 } = window;
        AjaxZip3.zip2addr(
            'zipCode1',
            'zipCode2',
            'address1',
            'address2',
            'address3'
        );
    }

    validateID = () => {
        if(this.state.UserID.length >= 4) {
            let result = true;

            if(this.state.Member !== null) {
                Object.keys(this.state.Member).map(id => {
                    const member = this.state.Member[id];
                    if(member.UserID === this.state.UserID) {
                        result = false;
                    }
                });                
            }
            if(result) {
                this.setState({
                    idMessage: ''
                });
                return true;
            }else {
                this.setState({
                    idMessage: '他のユーザーが使っています。'
                });
            }
        }else {
            this.setState({
                idMessage: '4字以上の文字で入力してください。'
            })
        }
        return false;
    }

    validatePW = () => {
        if(this.state.UserPW.length < 6) {
            this.setState({
                pwMessage: '暗証番号は最低6字以上にしてください。'
            });
            return false;
        }else {
            this.setState({
                pwMessage: ''
            });
            return true;
        }
    }

    validateName = () => {
        if(this.state.UserName.length === 0) {
            this.setState({
                nameMessage: '氏名は必須項目です。'
            });
            return false;
        }else {
            this.setState({
                nameMessage: ''
            })
            return true;
        }
    }
    
    validateBirth = () => {
        let birthYear = this.state.birthYear;
        let birthMonth = this.state.birthMonth;
        let birthDay = this.state.birthDay;

        if(birthYear.length!==0 & birthMonth.length!==0 & birthDay.length!==0) {
            this.setState({
                birthMessage: ''
            });
            return true;
        }else {
            this.setState({
                birthMessage: '生年月日は必須項目です。'
            });
            return false;
        }
    }
    
    validateAddr = () => {
        let zipCode1 = this.state.zipCode1;
        let zipCode2 = this.state.zipCode2;
        let address1 = this.state.address1;
        let address2 = this.state.address2;
        let address3 = this.state.address3;
        let address4 = this.state.address4;

        if(zipCode1.length !== 0 & zipCode2.length !==0 &
            address1.length !==0 & address2.length !==0 & address3.length !==0 & address4.length !==0) {
                this.setState({
                    addrMessage: ''
                })
                return true;
        }else {
            this.setState({
                addrMessage: '住所は必須項目です。'
            })
            return false;
        }
    }

    validatePhone = () => {
        let phone1 = this.state.phone1;
        let phone2 = this.state.phone2;
        let phone3 = this.state.phone3;

        if(phone1.length !==0 & phone2.length !==0 & phone3.length !==0) {
            this.setState({
                phoneMessage: ''
            });
            return true;
        }else {
            this.setState({
                phoneMessage: '電話番号は必須項目です。'
            });
            return false;
        }
    }

    validateAll = () => {
        let checkID = this.validateID();
        let checkPW = this.validatePW();
        let checkName = this.validateName();
        let checkBirth = this.validateBirth();
        let checkAddr = this.validateAddr();
        let checkPhone = this.validatePhone();

        // 전체 유효성 체크
        if(checkID & checkPW & checkName & checkBirth & checkAddr & checkPhone) {

            const Member = {
                UserID: this.state.UserID,
                UserPW: this.state.UserPW,
                UserName: this.state.UserName,
                Birth: this.state.birthYear + '-' + this.state.birthMonth + '-' + this.state.birthDay,
                Address: this.state.zipCode1 + '|' + this.state.zipCode2 + '|'
                        + this.state.address1 + '|' + this.state.address2 + '|' + this.state.address3 + '|' 
                        + this.state.address4 + '|' + this.state.address5,
                Phone: this.state.phone1 + '-' + this.state.phone2 + '-' + this.state.phone3,
                Unlock: true
            }
            this._post(Member);
        }
    };
    
    keyPress = (e) => {
        if(e.key === 'Enter'){
            this.validateAll();
        }
    }

    cancel = () => {
        this.props.history.push('/');
    }

    render() {
        const onChange = this.onChange;
        const validateID = this.validateID;
        const validatePW = this.validatePW;
        const validateName = this.validateName;
        const validateBirth = this.validateBirth;
        const validateAddr = this.validateAddr;
        const validatePhone = this.validatePhone;
        const validateAll = this.validateAll;
        const keyPress = this.keyPress;
        const cancel = this.cancel;

        return (
            <div className="MemberForm">
                <div className="form-div">
                    <table>
                        <tbody>
                            <tr>
                                <div className="label">ID</div><br />
                                <input type="text" name="UserID" 
                                    onChange={onChange} 
                                    onKeyUp={validateID}
                                    ref={(ref) => {this.input=ref}}
                                /><br />
                                <span className="msg">{this.state.idMessage}</span>
                            </tr>
                            <tr className="blankLine"></tr>
                            <tr>
                                <div className="label">Password</div><br />
                                <input type="password" name="UserPW" 
                                    onChange={onChange} 
                                    onKeyUp={validatePW}
                                /><br />
                                <span className="msg">{this.state.pwMessage}</span>
                            </tr>
                            <tr className="blankLine"></tr>
                            <tr>
                                <div className="label">氏名</div><br />
                                <input 
                                    type="text" name="UserName" 
                                    onChange={onChange} 
                                    onKeyUp={validateName}
                                /><br />
                                <span className="msg">{this.state.nameMessage}</span>
                            </tr>
                            <tr className="blankLine"></tr>
                            <tr>
                                <div className="label">生年月日</div><br />
                                <select name="birthYear" id="birthYear" onChange={onChange} onKeyUp={validateBirth}>
                                    <option value="">年</option>
                                    {selectYear}
                                </select>
                                &nbsp;
                                <select name="birthMonth" id="birthMonth" onChange={onChange} onKeyUp={validateBirth}>
                                    <option value="">月</option>
                                    {this.state.selectMonth}
                                </select>
                                &nbsp;
                                <select name="birthDay" onChange={onChange} onKeyUp={validateBirth}>
                                    <option value="">日</option>
                                    {this.state.selectDay}
                                </select><br />
                                <span className="msg">{this.state.birthMessage}</span>
                            </tr>
                            <tr className="blankLine"></tr>
                            <tr className="addr">
                                <div className="label">郵便番号</div><br />
                                <div className="zip_div">
                                <input name="zipCode1" size="3" maxLength="3" className="zipCode"
                                    value={this.state.zipCode1}
                                    onChange={onChange}
                                    onKeyUp={validateAddr}
                                />
                                &nbsp;-&nbsp;
                                <input name="zipCode2" size="4" maxLength="4" className="zipCode"
                                    value={this.state.zipCode2}
                                    onChange={onChange}
                                    onKeyUp={validateAddr}
                                />
                                <div className="addrBtn" onClick={this.fillAddr}>
                                    <div className="ajaxzip3">住所検索</div>
                                </div>
                                </div>
                            </tr>
                            <tr className="addr">
                                <div className="label">都道府県</div><br />
                                <input type="text" name="address1" id="address1" 
                                    value={this.state.address1}
                                    onChange={onChange} 
                                    onKeyUp={validateAddr}
                                />
                            </tr>
                            <tr className="addr">
                                <div className="label">市区町村</div><br />
                                <input type="text" name="address2" id="address2" 
                                    value={this.state.address2}
                                    onChange={onChange}
                                    onKeyUp={validateAddr}
                                />
                            </tr>
                            <tr className="addr">
                                <div className="label">町名</div><br />
                                <input type="text" name="address3" id="address3" 
                                    value={this.state.address3}
                                    onChange={onChange}
                                    onKeyUp={validateAddr}
                                />
                            </tr>
                            <tr className="addr">
                                <div className="label">番地</div><br />
                                <input type="text" name="address4" id="address4" 
                                    value={this.state.address4}
                                    onChange={onChange}
                                    onKeyUp={validateAddr}
                                />
                            </tr>
                            <tr>
                                <div className="label">マンション名・部屋番号</div><br />
                                <input type="text" name="address5" id="address5" 
                                    value={this.state.address5}
                                    onChange={onChange}
                                    onKeyUp={validateAddr}
                                />
                                <br />
                                <span className="msg">{this.state.addrMessage}</span>
                            </tr>
                            <tr className="blankLine"></tr>
                            <tr className="phone">
                                <div className="label">電話番号</div><br />
                                <input type="text" name="phone1" onChange={onChange} onKeyUp={validatePhone} /> -&nbsp;
                                <input type="text" name="phone2" onChange={onChange} onKeyUp={validatePhone} /> -&nbsp;
                                <input type="text" name="phone3" onChange={onChange} onKeyUp={validatePhone} onKeyPress={keyPress}/>
                                <br />
                                <span className="msg">{this.state.phoneMessage}</span>
                            </tr>
                            <tr className="blankLine"></tr>
                        </tbody>
                    </table>
                    <div className="joinBtn" onClick={validateAll}>
                        <div className="btn">登録</div>
                    </div>
                    <div className="cancelBtn" onClick={cancel}>
                        <div className="btn">キャンセル</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberForm;