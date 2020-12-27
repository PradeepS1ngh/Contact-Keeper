import React from "react";

const ContactItem = ({ contact }) => {
    const { name, email, phone, type } = contact;
    return (
        <>
            <div class="card mb-3" style={{maxWidth: "400px"}}>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img style={{width:"100px", marginTop:"50px"}}src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/Emergency_helpline_number_2_0.png?d.Cdk3IlfnfcYcai_r91a0XAQCraQilJ&size=770:433" alt="logo" />
                    </div>
                    <div class="col-md-9 text-light" >
                        <div class="card-body bg-primary text-left">
                            <div style={{display:"flex",justifyContent: "space-between"}}>
                                <h5 class="card-title">{name}</h5>
                                <span class={`badge ` + (type === 'personal' ? "bg-warning text-dark" : "bg-success")}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                            </div>
                            <p class="card-text ">
                                {email && <><i class="fas fa-envelope-open-text"></i><span class=" text-light m-lg-2">{email}</span></>}
                                <br />
                                {phone && <><i class="fas fa-phone-volume"></i><span class=" text-light m-lg-2">{phone}</span></>}
                            </p>
                            <button type="button" class="btn btn-light m-1" style={{padding : "1px 40px"}}>Edit</button>
                            <button type="button" class="btn btn-danger m-1" style={{padding : "1px 35px"}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactItem;