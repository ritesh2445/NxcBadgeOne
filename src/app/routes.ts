import { createBrowserRouter } from "react-router";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import AdminHome from "./screens/AdminHome";
import CreateRoom from "./screens/CreateRoom";
import RoomDetails from "./screens/RoomDetails";
import StartCheckin from "./screens/StartCheckin";
import ActiveCheckin from "./screens/ActiveCheckin";
import RoomLogs from "./screens/RoomLogs";
import Export from "./screens/Export";
import Announcements from "./screens/Announcements";
import CreateAnnouncement from "./screens/CreateAnnouncement";
import IssueDocument from "./screens/IssueDocument";
import AddStudents from "./screens/AddStudents";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/home",
    Component: AdminHome,
  },
  {
    path: "/create-room",
    Component: CreateRoom,
  },
  {
    path: "/room/:id",
    Component: RoomDetails,
  },
  {
    path: "/room/:id/add-students",
    Component: AddStudents,
  },
  {
    path: "/room/:id/start-checkin",
    Component: StartCheckin,
  },
  {
    path: "/room/:id/active-checkin",
    Component: ActiveCheckin,
  },
  {
    path: "/room/:id/logs",
    Component: RoomLogs,
  },
  {
    path: "/room/:id/export",
    Component: Export,
  },
  {
    path: "/room/:id/announcements",
    Component: Announcements,
  },
  {
    path: "/room/:id/announcements/create",
    Component: CreateAnnouncement,
  },
  {
    path: "/announcements/create",
    Component: CreateAnnouncement,
  },
  {
    path: "/issue-document",
    Component: IssueDocument,
  },
]);