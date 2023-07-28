import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ItemObjectFieldOptionControl from "../ItemObjectFieldOptionControl/ItemObjectFieldOptionControl";
import ItemTextFieldOptionControl from "../ItemTextFieldOptionControl/ItemTextFieldOptionControl";
import StyledTextAreaAutoSizeContent from "../StyledTextAreaAutoSizeContent/StyledTextAreaAutoSizeContent";
import StyledTextAreaAutoSizeHeader from "../StyledTextAreaAutoSizeHeader/StyledTextAreaAutoSizeHeader";
import PartSection from "../shares/PartSection/PartSection";
import ProcessSection from "../shares/ProcessSection/ProcessSection";

import WcIcon from "@mui/icons-material/Wc";
import TextFieldCus from "../shares/TextFieldCus/TextFieldCus";

const Div = styled.div`
  cursor: pointer;
`;
const DivField = styled.div`
  display: flex;
  align-items: center;
`;
const TemplateCV = ({ cv }) => {
  return (
    <Div>
      <div
        className="cv-content"
        style={{ border: `2px solid ${cv.cvInfo.color}`, borderRadius: "12px" }}
      >
        <div className="header-form-cv">
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
                    style={{
                      cursor: "pointer",
                      border: `2px solid ${cv.cvInfo.color} `,
                      borderRadius: "50%",
                      padding: "4px",
                    }}
                  >
                    <img
                      src={cv.userInfo.avatar}
                      alt=""
                      width={200}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        height: "200px",
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={12}>
                    <TextFieldCus
                      fontsize={32}
                      color={cv.cvInfo.color}
                      placeholder={"HỌ TÊN"}
                      width={100}
                      fontweight={"bold"}
                      value={cv.userInfo.fullname}
                      name={"fullname"}
                      uppercase={true}
                      readOnly={true}
                    />
                  </Col>
                  <Col lg={12}>
                    <TextFieldCus
                      fontsize={15}
                      color={"#000"}
                      placeholder={"VỊ TRÍ CÔNG VIỆC BẠN MUỐN ỨNG TUYỂN"}
                      width={100}
                      fontweight={"500"}
                      value={cv.cvInfo.positionJob}
                      name={"positionJob"}
                    />
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col>
                        <DivField>
                          <WcIcon
                            fontSize="13"
                            style={{ color: cv.cvInfo.color }}
                          />
                          <TextFieldCus
                            placeholder={"Nam / Nữ"}
                            width={80}
                            value={cv.userInfo.gender}
                            name={"gender"}
                          />
                        </DivField>
                      </Col>
                      <Col>
                        <DivField>
                          <CalendarMonthRoundedIcon
                            fontSize="13"
                            style={{ color: cv.cvInfo.color }}
                          />
                          <TextFieldCus
                            placeholder={"dd/mm/yyyy"}
                            width={80}
                            value={cv.userInfo.dob}
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
                        style={{ color: cv.cvInfo.color }}
                      />
                      <TextFieldCus
                        placeholder={"Điện thoại"}
                        value={cv.userInfo.phoneNumber}
                        name={"phoneNumber"}
                        width={100}
                      />
                    </DivField>
                  </Col>
                  <Col lg={12}>
                    <DivField>
                      <EmailRoundedIcon
                        fontSize="13"
                        style={{ color: cv.cvInfo.color }}
                      />
                      <TextFieldCus
                        placeholder={"Email"}
                        value={cv.userInfo.email}
                        name={"email"}
                        width={100}
                      />
                    </DivField>
                  </Col>
                  <Col lg={12}>
                    <DivField>
                      <CottageRoundedIcon
                        fontSize="13"
                        style={{ color: cv.cvInfo.color }}
                      />
                      <TextFieldCus
                        placeholder={"Địa chỉ"}
                        value={cv.userInfo.address}
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
                <StyledTextAreaAutoSizeHeader
                  value={"Mục tiêu nghề nghiệp"}
                  color={cv.cvInfo.color}
                />
                <StyledTextAreaAutoSizeContent
                  placeholder={"Mục tiêu dài hạn"}
                  value={cv.cvInfo.careerGoals.longTermGoal}
                  name={"longTermGoal"}
                />
                <StyledTextAreaAutoSizeContent
                  placeholder={"Mục tiêu ngắn hạn"}
                  value={cv.cvInfo.careerGoals.shorttermGoal}
                  name={"shorttermGoal"}
                />
              </Col>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Trình độ học vấn"}
                  color={cv.cvInfo.color}
                />
                <StyledTextAreaAutoSizeContent
                  placeholder={"Thời gian học tập"}
                  fontweight={500}
                  value={cv.cvInfo.academicLevel.learningTime}
                  name={"learningTime"}
                />
                <StyledTextAreaAutoSizeContent
                  fontweight={500}
                  placeholder={"Tên công ty/ trường học"}
                  value={cv.cvInfo.academicLevel.schoolName}
                  name={"schoolName"}
                />
                <StyledTextAreaAutoSizeContent
                  placeholder={"Khoa / Chuyên ngành học"}
                  value={cv.cvInfo.academicLevel.subject}
                  name={"subject"}
                />
                <StyledTextAreaAutoSizeContent
                  placeholder={"Mô tả chi tiết việc học tập"}
                  value={cv.cvInfo.academicLevel.content}
                  name={"content"}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <>
                  <StyledTextAreaAutoSizeHeader
                    value={"Kỹ năng"}
                    color={cv.cvInfo.color}
                  />
                  {cv.cvInfo.skills.length === 0 ? (
                    <h4>No Items</h4>
                  ) : (
                    cv.cvInfo.skills.map((skill) => (
                      <ProcessSection
                        sectionName={"skills"}
                        key={skill.sid}
                        section={skill.skillName}
                        sid={skill.sid}
                        value={skill.process}
                        name={"skillName"}
                        readOnly={true}
                      />
                    ))
                  )}
                </>
              </Col>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Kinh nghiệm làm việc"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.experiences.map((exp) => (
                  <PartSection
                    sectionName={"experiences"}
                    data={exp}
                    key={exp.sid}
                    readOnly={true}
                  />
                ))}
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Giải thưởng"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.prizes.map((prize) => (
                  <ItemTextFieldOptionControl
                    sectionName={"prizes"}
                    data={prize}
                    placeholder={"Nhập giải thưởng của bạn"}
                    readOnly={true}
                  />
                ))}
              </Col>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Chứng chỉ"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.certificates.map((cer) => (
                  <ItemTextFieldOptionControl
                    sectionName={"certificates"}
                    data={cer}
                    placeholder={"Nhập chứng chỉ của bạn"}
                    readOnly={true}
                  />
                ))}
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Hoạt Động"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.activities.map((ac) => (
                  <ItemTextFieldOptionControl
                    sectionName={"activities"}
                    data={ac}
                    placeholder={"Nhập hoạt động của bạn"}
                    readOnly={true}
                  />
                ))}
              </Col>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Dự Án đã tham gia"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.projectsJoined.map((project) => (
                  <ItemObjectFieldOptionControl
                    data={project}
                    sectionName={"projectsJoined"}
                    readOnly={true}
                  />
                ))}
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Sở thích"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.favorites.map((fav) => (
                  <ItemTextFieldOptionControl
                    sectionName={"favorites"}
                    data={fav}
                    placeholder={"Nhập sở thích của bạn"}
                    readOnly={true}
                  />
                ))}
              </Col>
              <Col lg={6}>
                <StyledTextAreaAutoSizeHeader
                  value={"Thông tin thêm"}
                  color={cv.cvInfo.color}
                />
                {cv.cvInfo.moreInfos.map((more) => (
                  <ItemTextFieldOptionControl
                    sectionName={"moreInfos"}
                    data={more}
                    placeholder={"Nhập thông tin thêm của bạn"}
                    readOnly={true}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Div>
  );
};

export default TemplateCV;
