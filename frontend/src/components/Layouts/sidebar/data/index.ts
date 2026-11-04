import * as Icons from "../icons";
export const NAV_DATA = [
 {label:"WORKSPACE",items:[
  {title:"Dashboard",url:"/dashboard",icon:Icons.HomeIcon,items:[]},
  {title:"Complaints & Appeals",url:"/cases",icon:Icons.Calendar,items:[]},
  {title:"My Assigned Cases",url:"/cases/my-assigned",icon:Icons.User,items:[]},
  {title:"Case Activity",url:"/cases/activity",icon:Icons.Time,items:[]},
 ]},
 {label:"ADMINISTRATION",items:[
  {title:"Users",url:"/users",icon:Icons.User,items:[]},
  {title:"Offices",url:"/offices",icon:Icons.Building,items:[]},
  {title:"Roles & Permissions",url:"/roles",icon:Icons.Authentication,items:[]},
  {title:"Reports",url:"/reports",icon:Icons.PieChart,items:[]},
  {title:"Announcements",url:"/announcements",icon:Icons.Notification,items:[]},
 ]},
 {label:"ACCOUNT",items:[
  {title:"My Profile",url:"/profile",icon:Icons.User,items:[]},
  {title:"Settings",url:"/pages/settings",icon:Icons.Settings,items:[]},
 ]}
];
