import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import WcIcon from "@mui/icons-material/Wc";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { v4 } from "uuid";
import avatar from "../../../access/no_avatar.jpg";
import ItemObjectFieldOptionControl from "../ItemObjectFieldOptionControl/ItemObjectFieldOptionControl";
import ItemTextFieldOptionControl from "../ItemTextFieldOptionControl/ItemTextFieldOptionControl";
import SectionOptionControl from "../SectionOptionControl/SectionOptionControl";
import StyledTextAreaAutoSizeContent from "../StyledTextAreaAutoSizeContent/StyledTextAreaAutoSizeContent";
import StyledTextAreaAutoSizeHeader from "../StyledTextAreaAutoSizeHeader/StyledTextAreaAutoSizeHeader";
import TippyHeadLess from "../TippyHeadless/TippyHeadless";
import AddItemWrapper from "../shares/AddItemWrapper/AddItemWrapper";
import PartSection from "../shares/PartSection/PartSection";
import ProcessSection from "../shares/ProcessSection/ProcessSection";
import Section from "../shares/Section/Section";
import TextFieldCus from "../shares/TextFieldCus/TextFieldCus";
import styles from "./Template1.scss";

import axios from "axios";
import { toast } from "react-toastify";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import { Box, LinearProgress } from "@mui/material";
const cx = classNames.bind(styles);
const DivField = styled.div`
  display: flex;
  align-items: center;
`;
const Div = styled.div`
  position: fixed;
  top: 80;
  left: 0;
  z-index: 10000;
  display: none;
  .icon-wrapper-setting {
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
    z-index: 20000;
  }
  .setting-tools {
    padding-left: 41px;
    display: flex;
    align-items: center;
  }
  &:hover {
    .setting-tools {
      width: 180px;
      transition: all 0.2s ease-in-out;
    }
  }
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const DivSetting = styled.div`
  width: 37px;
  overflow: hidden;
  height: 40px;
  background-color: white;
  position: fixed;
  top: 91px;
  left: 10px;
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  .setting-tools-wrapper {
    margin-left: 10px;
  }
`;
const Template1 = ({ email }) => {
  const [form, setform] = useState({
    userInfo: {
      avatar: "",
      fullname: "",
      gender: "",
      dob: "",
      phoneNumber: "",
      email,
      address: "",
    },
    cvInfo: {
      positionJob: "",
      careerGoals: {
        shorttermGoal: "",
        longTermGoal: "",
      },
      academicLevel: {
        learningTime: "",
        schoolName: "",
        subject: "",
        content: "",
      },
      skills: [
        {
          sid: v4(),
          skillName: "",
          process: 0,
        },
      ],
      experiences: [
        {
          sid: v4(),
          studyTime: "",
          companyName: "",
          position: "",
          content: "",
        },
      ],
      prizes: [
        {
          sid: v4(),
          name: "",
        },
      ],
      certificates: [
        {
          sid: v4(),
          name: "",
        },
      ],
      projectsJoined: [
        {
          sid: v4(),
          name: "",
          role: "",
          result: "",
        },
      ],
      activities: [
        {
          sid: v4(),
          name: "",
        },
      ],
      favorites: [
        {
          sid: v4(),
          name: "",
        },
      ],
      moreInfos: [
        {
          sid: v4(),
          name: "",
        },
      ],
    },
  });
  const [editorValue, setEditorValue] = useState("");
  const [color, setcolor] = useState("#CBBCAE");
  const [openUploadAvata, setOpenUploadAvata] = React.useState(false);
  const [openSaveCv, setOpenSaveCv] = React.useState(false);
  const [avata, setAvata] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [url, seturl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleClickOpenUploadAvata = () => {
    setOpenUploadAvata(true);
  };

  const handleCloseUploadAvata = () => {
    setOpenUploadAvata(false);
  };
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  const handleInputChange = (e) => {
    setform((prev) => ({
      ...prev,
      userInfo: {
        ...form.userInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleChangeInputCvCareerGoals = (e) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        careerGoals: {
          ...form.cvInfo.careerGoals,
          [e.target.name]: e.target.value,
        },
      },
    }));
  };
  const handleChangeInputCvAcademic = (e) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        academicLevel: {
          ...form.cvInfo.academicLevel,
          [e.target.name]: e.target.value,
        },
      },
    }));
  };
  const handleChangeInputCvPositionJob = (e) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleChangeProcessPlus = (sid) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        skills: form.cvInfo.skills.map((skill) =>
          skill.sid === sid
            ? {
                ...skill,
                process: skill.process === 100 ? 0 : skill.process + 10,
              }
            : skill
        ),
      },
    }));
  };
  const handleChangeProcessSub = (sid) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        skills: form.cvInfo.skills.map((skill) =>
          skill.sid === sid
            ? {
                ...skill,
                process: skill.process === 0 ? 100 : skill.process - 10,
              }
            : skill
        ),
      },
    }));
  };
  const handleChangeDeleteItem = (sid, sectionName) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        [sectionName]: form.cvInfo[sectionName].filter(
          (data) => data.sid !== sid
        ),
      },
    }));
  };
  const handleInputOnChangeSkillName = (sid, e) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        skills: form.cvInfo.skills.map((skill) =>
          skill.sid === sid
            ? { ...skill, [e.target.name]: e.target.value }
            : skill
        ),
      },
    }));
  };
  const handleAddSectionItemSkill = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        skills: [
          ...form.cvInfo.skills,
          {
            sid: v4(),
            skillName: "",
            process: 0,
          },
        ],
      },
    }));
  };
  const handleChangeInputExperience = (sid, e) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        experiences: form.cvInfo.experiences.map((experience) =>
          experience.sid === sid
            ? { ...experience, [e.target.name]: e.target.value }
            : experience
        ),
      },
    }));
  };
  const handleAddSectionExperience = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        experiences: [
          ...form.cvInfo.experiences,
          {
            sid: v4(),
            studyTime: "",
            companyName: "",
            position: "",
            content: "",
          },
        ],
      },
    }));
  };
  const handleAddSectionProjectJoined = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        projectsJoined: [
          ...form.cvInfo.projectsJoined,
          {
            sid: v4(),
            name: "",
            role: "",
            result: "",
          },
        ],
      },
    }));
  };
  const handleAddPrizeSection = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        prizes: [
          ...form.cvInfo.prizes,
          {
            sid: v4(),
            name: "",
          },
        ],
      },
    }));
  };
  const handleAddCertificateSection = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        certificates: [
          ...form.cvInfo.certificates,
          {
            sid: v4(),
            name: "",
          },
        ],
      },
    }));
  };
  const handleAddActivitySection = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        activities: [
          ...form.cvInfo.activities,
          {
            sid: v4(),
            name: "",
          },
        ],
      },
    }));
  };
  const handleAddFavoriteSection = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        favorites: [
          ...form.cvInfo.favorites,
          {
            sid: v4(),
            name: "",
          },
        ],
      },
    }));
  };
  const handleAddMoreInfosSection = () => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        moreInfos: [
          ...form.cvInfo.moreInfos,
          {
            sid: v4(),
            name: "",
          },
        ],
      },
    }));
  };
  const handleOnChangeTextFieldBySectionName = (sid, e, sectionName) => {
    setform((prev) => ({
      ...prev,
      cvInfo: {
        ...form.cvInfo,
        [sectionName]: form.cvInfo[sectionName].map((dt) =>
          dt.sid === sid ? { ...dt, [e.target.name]: e.target.value } : dt
        ),
      },
    }));
  };
  const handleUploadAvatar = async () => {
    try {
      setIsUploading(true);
      const data = new FormData();
      data.append("file", avata);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dhhahwrmr");
      data.append("folder", `${email}/avatar`);
      fetch("https://api.cloudinary.com/v1_1/dhhahwrmr/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          seturl(data.url);
          setOpenUploadAvata(false);
          setIsUploading(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        });
    } catch (error) {}
  };
  const handleClickOpenSaveCv = () => {
    setOpenSaveCv(true);
  };

  const handleCloseSaveCv = () => {
    setOpenSaveCv(false);
  };
  const handleClickSaveCv = async () => {
    try {
      const data = form;
      data.userInfo.avatar = url;
      await axios
        .post(`${config.API}/api/cv/createCv`, {
          ...data,
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          toast.success(response.message, {
            theme: "colored",
          });
          setOpenSaveCv(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            theme: "colored",
          });
        });
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
      });
      setOpenSaveCv(false);
    }
  };

  const fetchAvatars = async () => {
    try {
      await axios
        .post(`${config.API}/api/user/avatars`, {
          folder: email,
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          seturl(response.images[0]);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            theme: "colored",
          });
        });
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
      });
    }
  };
  useEffect(() => {
    fetchAvatars();
  });
  return (
    <>
      <Dialog open={openUploadAvata} onClose={handleCloseUploadAvata}>
        <DialogTitle>Đăng Ảnh</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose File</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File"
            type="file"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setAvata(e.target.files[0]);
              setIsSelected(true);
            }}
          />
        </DialogContent>
        <DialogActions>
          {isUploading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <>
              <Button onClick={handleCloseUploadAvata}>Cancel</Button>
              <Button onClick={handleUploadAvatar}>Upload</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
      <Dialog
        open={openSaveCv}
        onClose={handleCloseSaveCv}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Lưu CV"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn lưu lại cv này ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSaveCv}>Cancel</Button>
          <Button onClick={handleClickSaveCv} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <div className={cx("top-tool")}>
        <div className={cx("toolbar")}>
          <div className={cx("toolbar-left")}>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <PhotoRoundedIcon />
                  </span>
                  <p>Màu sắc</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <AutoAwesomeMotionRoundedIcon />
                  </span>
                  <p>Mẫu CV</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <PersonRoundedIcon />
                  </span>
                  <p>Ảnh hồ sơ</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <div className={cx("toolbar-item-child")}>
                <button className={cx("btn-download")}>
                  <span>
                    <ArrowDownwardRoundedIcon />
                  </span>
                  <p>Tải Xuống</p>
                </button>
              </div>
            </div>
            <div className={cx("toolbar-item")} onClick={handleClickOpenSaveCv}>
              <div className={cx("toolbar-item-child")}>
                <span>
                  <SaveRoundedIcon />
                </span>
                <p>Lưu CV</p>
              </div>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <ManageAccountsRoundedIcon />
                  </span>
                  <p>Quản lí CV</p>
                </div>
              </TippyHeadLess>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("cv-content")}>
          <div className={cx("header-form-cv")}>
            <Container fluid>
              <Row>
                <Col lg={6}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleClickOpenUploadAvata}
                    >
                      <img
                        src={url ? url : avatar}
                        alt=""
                        width={300}
                        height={300}
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={12}>
                      <TextFieldCus
                        fontsize={32}
                        color={"#a49b62"}
                        placeholder={"HỌ TÊN"}
                        width={100}
                        fontweight={"bold"}
                        value={form.userInfo.fullname}
                        onChange={handleInputChange}
                        name={"fullname"}
                        uppercase={true}
                      />
                    </Col>
                    <Col lg={12}>
                      <TextFieldCus
                        fontsize={15}
                        color={"#000"}
                        placeholder={"VỊ TRÍ CÔNG VIỆC BẠN MUỐN ỨNG TUYỂN"}
                        width={100}
                        fontweight={"500"}
                        value={form.cvInfo.positionJob}
                        onChange={handleChangeInputCvPositionJob}
                        name={"positionJob"}
                      />
                    </Col>
                    <Col lg={12}>
                      <Row>
                        <Col>
                          <DivField>
                            <WcIcon fontSize="13" style={{ color: color }} />
                            <TextFieldCus
                              placeholder={"Nam"}
                              width={80}
                              value={form.userInfo.gender}
                              onChange={handleInputChange}
                              name={"gender"}
                            />
                          </DivField>
                        </Col>
                        <Col>
                          <DivField>
                            <CalendarMonthRoundedIcon
                              fontSize="13"
                              style={{ color: color }}
                            />
                            <TextFieldCus
                              placeholder={"11/09/2002"}
                              width={80}
                              value={form.userInfo.dob}
                              onChange={handleInputChange}
                              name={"dob"}
                            />
                          </DivField>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={12}>
                      <DivField>
                        <LocalPhoneRoundedIcon
                          fontSize="13"
                          style={{ color: color }}
                        />
                        <TextFieldCus
                          placeholder={"Điện thoại"}
                          value={form.userInfo.phoneNumber}
                          onChange={handleInputChange}
                          name={"phoneNumber"}
                          width={100}
                        />
                      </DivField>
                    </Col>
                    <Col lg={12}>
                      <DivField>
                        <EmailRoundedIcon
                          fontSize="13"
                          style={{ color: color }}
                        />
                        <TextFieldCus
                          placeholder={"Email"}
                          value={form.userInfo.email}
                          onChange={handleInputChange}
                          name={"email"}
                          width={100}
                        />
                      </DivField>
                    </Col>
                    <Col lg={12}>
                      <DivField>
                        <CottageRoundedIcon
                          fontSize="13"
                          style={{ color: color }}
                        />
                        <TextFieldCus
                          placeholder={"Địa chỉ"}
                          value={form.userInfo.address}
                          onChange={handleInputChange}
                          name={"address"}
                          width={100}
                        />
                      </DivField>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col lg={6}>
                  <Section>
                    <StyledTextAreaAutoSizeHeader
                      value={"Mục tiêu nghề nghiệp"}
                    />
                    <StyledTextAreaAutoSizeContent
                      placeholder={"Mục tiêu dài hạn"}
                      value={form.cvInfo.careerGoals.longTermGoal}
                      onChange={handleChangeInputCvCareerGoals}
                      name={"longTermGoal"}
                    />
                    <StyledTextAreaAutoSizeContent
                      placeholder={"Mục tiêu ngắn hạn"}
                      value={form.cvInfo.careerGoals.shorttermGoal}
                      onChange={handleChangeInputCvCareerGoals}
                      name={"shorttermGoal"}
                    />
                  </Section>
                </Col>
                <Col lg={6}>
                  <Section>
                    <StyledTextAreaAutoSizeHeader value={"Trình độ học vấn"} />
                    <StyledTextAreaAutoSizeContent
                      placeholder={"Thời gian học tập"}
                      value={form.cvInfo.academicLevel.learningTime}
                      name={"learningTime"}
                      onChange={handleChangeInputCvAcademic}
                    />
                    <StyledTextAreaAutoSizeContent
                      fontweight={500}
                      placeholder={"Tên công ty/ trường học"}
                      value={form.cvInfo.academicLevel.schoolName}
                      name={"schoolName"}
                      onChange={handleChangeInputCvAcademic}
                    />
                    <StyledTextAreaAutoSizeContent
                      placeholder={"Khoa / Chuyên ngành học"}
                      value={form.cvInfo.academicLevel.subject}
                      name={"subject"}
                      onChange={handleChangeInputCvAcademic}
                    />
                    <StyledTextAreaAutoSizeContent
                      placeholder={"Mô tả chi tiết việc học tập"}
                      value={form.cvInfo.academicLevel.content}
                      name={"content"}
                      onChange={handleChangeInputCvAcademic}
                    />
                  </Section>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Section>
                    <AddItemWrapper
                      title={"Kỹ năng"}
                      handleAddSectionItem={handleAddSectionItemSkill}
                    >
                      <>
                        <StyledTextAreaAutoSizeHeader value={"Kỹ năng"} />
                        {form.cvInfo.skills.length === 0 ? (
                          <h4>No Items</h4>
                        ) : (
                          form.cvInfo.skills.map((skill) => (
                            <ProcessSection
                              sectionName={"skills"}
                              key={skill.sid}
                              section={skill.skillName}
                              handleChangeProcessPlus={handleChangeProcessPlus}
                              handleChangeProcessSub={handleChangeProcessSub}
                              sid={skill.sid}
                              handleChangeDeleteItem={handleChangeDeleteItem}
                              value={skill.process}
                              name={"skillName"}
                              onChange={handleInputOnChangeSkillName}
                            />
                          ))
                        )}
                      </>
                    </AddItemWrapper>
                  </Section>
                </Col>
                <Col lg={6}>
                  <Section>
                    <AddItemWrapper
                      title={"Kinh nghiệm"}
                      handleAddSectionItem={handleAddSectionExperience}
                    >
                      <StyledTextAreaAutoSizeHeader
                        value={"Kinh nghiệm làm việc"}
                      />
                      {form.cvInfo.experiences.map((exp) => (
                        <PartSection
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          sectionName={"experiences"}
                          data={exp}
                          key={exp.sid}
                          onChange={handleChangeInputExperience}
                        />
                      ))}
                    </AddItemWrapper>
                  </Section>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Section>
                    <SectionOptionControl
                      handleAddItemSection={handleAddPrizeSection}
                    >
                      <StyledTextAreaAutoSizeHeader value={"Giải thưởng"} />
                      {form.cvInfo.prizes.map((prize) => (
                        <ItemTextFieldOptionControl
                          sectionName={"prizes"}
                          data={prize}
                          placeholder={"Nhập giải thưởng của bạn"}
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          onChange={handleOnChangeTextFieldBySectionName}
                        />
                      ))}
                    </SectionOptionControl>
                  </Section>
                </Col>
                <Col lg={6}>
                  <Section>
                    <SectionOptionControl
                      handleAddItemSection={handleAddCertificateSection}
                    >
                      <StyledTextAreaAutoSizeHeader value={"Chứng chỉ"} />
                      {form.cvInfo.certificates.map((cer) => (
                        <ItemTextFieldOptionControl
                          sectionName={"certificates"}
                          data={cer}
                          placeholder={"Nhập chứng chỉ của bạn"}
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          onChange={handleOnChangeTextFieldBySectionName}
                        />
                      ))}
                    </SectionOptionControl>
                  </Section>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Section>
                    <SectionOptionControl
                      handleAddItemSection={handleAddActivitySection}
                    >
                      <StyledTextAreaAutoSizeHeader value={"Hoạt Động"} />
                      {form.cvInfo.activities.map((ac) => (
                        <ItemTextFieldOptionControl
                          sectionName={"activities"}
                          data={ac}
                          placeholder={"Nhập hoạt động của bạn"}
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          onChange={handleOnChangeTextFieldBySectionName}
                        />
                      ))}
                    </SectionOptionControl>
                  </Section>
                </Col>
                <Col lg={6}>
                  <Section>
                    <AddItemWrapper
                      title={"Dự án"}
                      handleAddSectionItem={handleAddSectionProjectJoined}
                    >
                      <StyledTextAreaAutoSizeHeader
                        value={"Dự Án đã tham gia"}
                      />
                      {form.cvInfo.projectsJoined.map((project) => (
                        <ItemObjectFieldOptionControl
                          data={project}
                          sectionName={"projectsJoined"}
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          onChange={handleOnChangeTextFieldBySectionName}
                        />
                      ))}
                    </AddItemWrapper>
                  </Section>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Section>
                    <SectionOptionControl
                      handleAddItemSection={handleAddFavoriteSection}
                    >
                      <StyledTextAreaAutoSizeHeader value={"Sở thích"} />
                      {form.cvInfo.favorites.map((fav) => (
                        <ItemTextFieldOptionControl
                          sectionName={"favorites"}
                          data={fav}
                          placeholder={"Nhập sở thích của bạn"}
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          onChange={handleOnChangeTextFieldBySectionName}
                        />
                      ))}
                    </SectionOptionControl>
                  </Section>
                </Col>
                <Col lg={6}>
                  <Section>
                    <SectionOptionControl
                      handleAddItemSection={handleAddMoreInfosSection}
                    >
                      <StyledTextAreaAutoSizeHeader value={"Thông tin thêm"} />
                      {form.cvInfo.moreInfos.map((more) => (
                        <ItemTextFieldOptionControl
                          sectionName={"moreInfos"}
                          data={more}
                          placeholder={"Nhập thông tin thêm của bạn"}
                          handleChangeDeleteItem={handleChangeDeleteItem}
                          onChange={handleOnChangeTextFieldBySectionName}
                        />
                      ))}
                    </SectionOptionControl>
                  </Section>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
