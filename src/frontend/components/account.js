const account=()=>{
        return `<div id="acc_body">
        <div id="acc_main">
            <div id="my_account" class="t_center">
                <h5 class="red">MY ACCOUNT</h5>
                <div onhover >Orders</div>
                <div>Profile</div>
                <div>Wallet</div>
                
            </div>
            
            <div >

                <div id="profile">
                    <div class="flex">
                        <span>Your Profile</span>
                        <button class="btn">EDIT PROFILE</button>
                    </div>
                <div id="data">
                    <div>
                        <span class="red">First Name -</span><span id="first_name"></span>
                    </div>
                    <div>
                        <span class="red">Last Name -</span><span id="last_name"></span>
                    </div>
                    <div>
                        <span class="red">Email Address -</span><span id="email_id"></span>
                    </div>
                    <div>
                        <span class="red">Phone number -</span><span id="mob"></span>
                    </div>
                    <div>
                        <span class="red">DOB -</span><span id="dob"></span>
                    </div>
                    <div>
                        <span class="red">Gender -</span><span id="gender"></span>
                    </div>
                </div>
                    
                </div>
                
            </div>

            <div id="address">
                <div class="red">Your Addresses</div>
                <button class="btn">+ADD ADDRESS</button>
            </div>
            
        </div>
    </div>`
}
export default account;


