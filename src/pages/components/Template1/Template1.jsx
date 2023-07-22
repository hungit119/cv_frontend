import React from "react";
import classNames from "classnames/bind";
import styles from "./Template1.scss";
import { Grid, TextField } from "@mui/material";
import TextFieldCus from "../shares/TextFieldCus/TextFieldCus";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WcIcon from "@mui/icons-material/Wc";
import styled from "styled-components";
import avatar from "../../../access/no_avatar.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Section from "../shares/Section/Section";
import StyledTextAreaAutoSizeHeader from "../StyledTextAreaAutoSizeHeader/StyledTextAreaAutoSizeHeader";
import StyledTextAreaAutoSizeContent from "../StyledTextAreaAutoSizeContent/StyledTextAreaAutoSizeContent";
import ProcessSection from "../shares/ProcessSection/ProcessSection";
import PartSection from "../shares/PartSection/PartSection";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Button } from "@mui/material";
import AddItemWrapper from "../shares/AddItemWrapper/AddItemWrapper";
import ItemTextFieldOptionControl from "../ItemTextFieldOptionControl/ItemTextFieldOptionControl";
import SectionOptionControl from "../SectionOptionControl/SectionOptionControl";

const dataFake = {
  userInfo: {
    fullname: "TRẦN DUY HÙNG",
    gender: "Nam",
    dob: "11/09/2002",
    phoneNumber: "0325834857",
    email: "tranduyhungdz119@gmail.com",
    address: "Hoàng Mai, Hà Nội",
  },
  cvInfo: {
    positionJob: "Frontend Developer",
    careerGoals: {
      shorttermGoal: "- Có thể hiểu một cách đơn giản, mục tiêu nghề nghiệp. ",
      longTermGoal: "- Có thể là mục tiêu ngắn hạn hoặc một mục tiêu dài hạn.",
    },
    academicLevel: {
      learningTime: "30/5/2023 - 11/6/2023",
      schoolName: "Đại học Xây Dựng Hà Nội",
      subject: "CNTT - Khoa học máy tính",
      content: "Xếp loại: Giỏi",
    },
    skills: [
      {
        sid: "abc",
        skillName: "Tiếng Anh giao tiếp",
        process: 60,
      },
      {
        sid: "abcd",
        skillName: "Khả năng tính toán và tư duy",
        process: 70,
      },
      {
        sid: "abcde",
        skillName: "Khả năng làm việc nhóm và làm việc độc lập",
        process: 80,
      },
    ],
    experiences: [
      {
        sid: "fgh",
        studyTime: "1/2/2022-22/7/2023",
        companyName: "Jits Innovation Labs",
        position: "Dev Center",
        content: "Mô tả",
      },
      {
        sid: "fghj",
        studyTime: "2/2/2022-19/3/2023",
        companyName: "BBPS",
        position: "Dev Center",
        content: "Mô tả",
      },
    ],
    prizes: [
      {
        sid: "1234",
        name: "Nhân viên bán hàng xuất sắc nhất tháng",
      },
      {
        sid: "12345",
        name: "Nhân viên bán hàng xuất sắc nhất quý",
      },
      {
        sid: "123456",
        name: "Nhân viên bán hàng xuất sắc nhất năm",
      },
    ],
    certificates: [
      {
        sid: "1234567",
        name: "TOEIC",
      },
      {
        sid: "12345678",
        name: "IELTS",
      },
      {
        sid: "123456789",
        name: "B1",
      },
    ],
    projectsJoined: [
      {
        sid: "1234098",
        name: "Jira clone",
        role: "Nghiên cứu và cung cấp thông tin",
        result: "Giải nhì cấp trường cho cuộc thi nghiên cứu khoa học",
      },
      {
        sid: "1234098",
        name: "Jira clone 1",
        role: "Nghiên cứu và cung cấp thông tin",
        result: "Giải nhì cấp trường cho cuộc thi nghiên cứu khoa học",
      },
      {
        sid: "1234098",
        name: "Jira clone 2",
        role: "Nghiên cứu và cung cấp thông tin",
        result: "Giải nhì cấp trường cho cuộc thi nghiên cứu khoa học",
      },
    ],
    activities: [
      {
        sid: "1234",
        name: "Tham gia tình nguyện hoa phượng đỏ",
      },
      {
        sid: "12345",
        name: "Tham gia tình nguyện hoa phượng trắng",
      },
      {
        sid: "123456",
        name: "Tham gia tình nguyện hoa phượng đen",
      },
    ],
    favorites: [
      {
        sid: "1234",
        name: "Chơi game",
      },
      {
        sid: "12345",
        name: "Xem phim",
      },
      {
        sid: "123456",
        name: "Đá bóng",
      },
    ],
    moreInfos: [
      {
        sid: "132344",
        name: "bla bla bla",
      },
    ],
  },
};

const cx = classNames.bind(styles);
const DivField = styled.div`
  display: flex;
  align-items: center;
`;
const Template1 = () => {
  const [form, setform] = useState(dataFake);
  const [editorValue, setEditorValue] = useState("");
  const [color, setcolor] = useState("#CBBCAE");
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
            sid: "abcdef",
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
            sid: "fghjk",
            studyTime: "",
            companyName: "",
            position: "",
            content: "",
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
            sid: "123476",
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
            sid: "123476",
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
            sid: "123476",
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
            sid: "123476",
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
            sid: "123476",
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
  return (
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
                  <img
                    src={avatar}
                    alt=""
                    width={200}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className={cx("fake-image")}></div>
                </div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={12}>
                    <TextFieldCus
                      fontsize={35}
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
                  />
                  <StyledTextAreaAutoSizeContent
                    fontweight={500}
                    placeholder={"Tên công ty/ trường học"}
                    value={form.cvInfo.academicLevel.schoolName}
                  />
                  <StyledTextAreaAutoSizeContent
                    placeholder={"Vị trí công việc"}
                    value={form.cvInfo.academicLevel.subject}
                  />
                  <StyledTextAreaAutoSizeContent
                    placeholder={"Mô tả chi tiết công việc"}
                    value={form.cvInfo.academicLevel.content}
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
                  <StyledTextAreaAutoSizeHeader value={"Dự Án đã tham gia"} />
                  <StyledTextAreaAutoSizeContent placeholder={"Nội dung"} />
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
  );
};

export default Template1;
