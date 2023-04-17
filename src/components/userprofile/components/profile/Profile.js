import React, { useState, useEffect } from 'react'
import styles from './styles/Profile.module.scss';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
function Profile({ users, error }) {
  const dispatch = useDispatch();
  const states = useSelector((state) => state?.loginUser);
  const history = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState([]);

  const [auths, setAuths] = useState(false);

  useEffect(() => {
    setUser(users);
  }, [error, users,user]);
  useEffect(() => {
    setValue("username", user?.firstName);
    setValue("gender", user?.gender);
    setValue("email", user?.email);
    setValue("phonenumber", user?.contactNumber);
    setValue("dateofbirth", user?.dateOfBirth);
    localStorage.setItem("user", JSON.stringify(user?.firstName));
    if(error)
    {
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
        history.push("/login");
    }
  }, [user,error])
  const [show, setShow] = useState(false);
  const NavigateRedirect = () => {
    history?.push("/login")
  }

  if (error) {
    return (
      <div>
        {NavigateRedirect()}
      </div>
    )
  }
  else {
    return (
      <div className={styles.profileformssection}>
        <div className={styles.personalinformation}>
          <div className="commonprofiletextsize">Personal Information</div>
          <div>
            <button className={styles.editbutton} onClick={() => history.push("/profile/edit")}>Edit</button>
          </div>
        </div>
        <div className="mt-4 mb-2">
          <Row>
            <Col xs="12" sm="12" md="6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" className='form-control-profile'
                  {...register("username", {
                    required: "Please enter username",

                  })}
                  disabled
                />
                <Form.Text className="text-muted">
                  {errors.name && <span className="active">{errors.name.message}</span>}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col xs="12" sm="12" md="6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>

                <select
                  className='form-control-profiles'
                  id="selectmethod"
                  defaultValue=""
                  name="gender"
                  {...register("gender", { required: "Please enter gender", })}
                  disabled
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>

                </select>

                {/* <Form.Select aria-label="Default select example"   {...register("gender", { required: "Please enter gender", })}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
  
                </Form.Select> */}


                <Form.Text className="text-muted">
                  {errors.gender && <span className="active">{errors.gender.message}</span>}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="12" md="6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" className='form-control-profile'
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    },
                  })}
                  disabled

                />
                <Form.Text className="text-muted">
                  {errors.alternatecontactnumber && <span className="active">{errors.alternatecontactnumber.message}</span>}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col xs="12" sm="12" md="6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter contactno" className='form-control-profile'
                  {...register("phonenumber", {
                    required: "Please enter contactno",

                  })}
                  disabled
                />
                <Form.Text className="text-muted">
                  {errors.phonenumber && <span className="active">{errors.phonenumber.message}</span>}
                </Form.Text>
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col xs="12" sm="12" md="6">

              <Form.Group className="mb-3"  >
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" placeholder="Date Of Birth" className='form-control-profile'
                  {...register("dateofbirth", {
                    required: "Please enter dateofbirth",

                  })}
                  disabled
                />
                {errors.dateofbirth && <span className="active">{errors.dateofbirth.message}</span>}
              </Form.Group>
            </Col>

          </Row>
        </div>
      </div>
    )
  }

}

export default Profile