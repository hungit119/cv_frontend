import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userInfo: {
//     fullname: "TRẦN DUY HÙNG",
//     gender: "Nam",
//     dob: "11/09/2002",
//     phoneNumber: "0325834857",
//     email: "tranduyhungdz119@gmail.com",
//     address: "Hoàng Mai, Hà Nội",
//   },
//   cvInfo: {
//     positionJob: "Frontend Developer",
//     careerGoals: {
//       shorttermGoal: "- Có thể hiểu một cách đơn giản, mục tiêu nghề nghiệp. ",
//       longTermGoal: "- Có thể là mục tiêu ngắn hạn hoặc một mục tiêu dài hạn.",
//     },
//     academicLevel: {
//       learningTime: "30/5/2023 - 11/6/2023",
//       schoolName: "Đại học Xây Dựng Hà Nội",
//       subject: "CNTT - Khoa học máy tính",
//       content: "Xếp loại: Giỏi",
//     },
//     skills: [
//       {
//         sid: "abc",
//         skillName: "Tiếng Anh giao tiếp",
//         process: 60,
//       },
//       {
//         sid: "abcd",
//         skillName: "Khả năng tính toán và tư duy",
//         process: 70,
//       },
//       {
//         sid: "abcde",
//         skillName: "Khả năng làm việc nhóm và làm việc độc lập",
//         process: 80,
//       },
//     ],
//     experiences: [
//       {
//         sid: "fgh",
//         studyTime: "1/2/2022-22/7/2023",
//         companyName: "Jits Innovation Labs",
//         position: "Dev Center",
//         content: "Mô tả",
//       },
//       {
//         sid: "fghj",
//         studyTime: "2/2/2022-19/3/2023",
//         companyName: "BBPS",
//         position: "Dev Center",
//         content: "Mô tả",
//       },
//     ],
//     prizes: [
//       {
//         sid: "1234",
//         name: "Nhân viên bán hàng xuất sắc nhất tháng",
//       },
//       {
//         sid: "12345",
//         name: "Nhân viên bán hàng xuất sắc nhất quý",
//       },
//       {
//         sid: "123456",
//         name: "Nhân viên bán hàng xuất sắc nhất năm",
//       },
//     ],
//     certificates: [
//       {
//         sid: "1234567",
//         name: "TOEIC",
//       },
//       {
//         sid: "12345678",
//         name: "IELTS",
//       },
//       {
//         sid: "123456789",
//         name: "B1",
//       },
//     ],
//     projectsJoined: [
//       {
//         sid: "12340989",
//         name: "Jira clone",
//         role: "Nghiên cứu và cung cấp thông tin",
//         result: "Giải nhì cấp trường cho cuộc thi nghiên cứu khoa học",
//       },
//       {
//         sid: "12340988",
//         name: "Jira clone 1",
//         role: "Nghiên cứu và cung cấp thông tin",
//         result: "Giải nhì cấp trường cho cuộc thi nghiên cứu khoa học",
//       },
//       {
//         sid: "12340986",
//         name: "Jira clone 2",
//         role: "Nghiên cứu và cung cấp thông tin",
//         result: "Giải nhì cấp trường cho cuộc thi nghiên cứu khoa học",
//       },
//     ],
//     activities: [
//       {
//         sid: "1234",
//         name: "Tham gia tình nguyện hoa phượng đỏ",
//       },
//       {
//         sid: "12345",
//         name: "Tham gia tình nguyện hoa phượng trắng",
//       },
//       {
//         sid: "123456",
//         name: "Tham gia tình nguyện hoa phượng đen",
//       },
//     ],
//     favorites: [
//       {
//         sid: "1234",
//         name: "Chơi game",
//       },
//       {
//         sid: "12345",
//         name: "Xem phim",
//       },
//       {
//         sid: "123456",
//         name: "Đá bóng",
//       },
//     ],
//     moreInfos: [
//       {
//         sid: "132344",
//         name: "bla bla bla",
//       },
//     ],
//   },
// };
const initialState = {
  isLoading: true,
  cvInfo: {},
  cvSelected: {},
  cvs: [],
};

const CvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setCvSelected: (state, actions) => {
      state.cvSelected = actions.payload;
    },
    setCvs: (state, action) => {
      state.cvs = action.payload;
    },
  },
});

export const { setCvSelected, setCvs } = CvSlice.actions;

export default CvSlice.reducer;
