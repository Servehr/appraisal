import React from "react";
import { Route, Routes, useRoutes } from 'react-router-dom';
import { Login } from "../views/layout/auth/Login";
import { Header } from "../views/layout/header";
import { Dashboard } from "../views/pages/Dashboard";
import { Performance } from "../views/pages/Performance";
import { Resource } from "../views/pages/Resource";
import { Files } from "../views/pages/Files";
import { User } from "../views/pages/User";
import { Department } from "../views/pages/Department";
import { Permission } from "../views/pages/Permission";
import { Privilege } from "../views/pages/Priviledge";
import { Roles } from "../views/pages/Roles";
import { Questionaire } from "../views/pages/Questionaire";
import { Questions } from "../views/pages/Questions";
import { Report } from "../views/pages/Report";
import { Goal } from "../views/pages/Goal";
import { Forgot } from "../views/layout/auth/Forgot";
import { Reset } from "../views/layout/auth/Reset";
// import { Tasks } from "../views/pages/Task";
import { Task } from "../views/pages/Task";
import { Appraisal } from "../views/pages/Appraisal";
import { Profile } from "../views/pages/Profile";
import { Appraisals } from "../views/pages/Appraisals";
import { AnswersByDepartment } from "../views/pages/AnswersByDepartment";
import { AppraisalSetting } from "../views/pages/AppraisalSetting";
import { Interaction } from "../views/pages/Interaction";
import { Company } from "../views/pages/Company";
import { Answers } from "../views/pages/Answers";
import { Question } from "../views/pages/Question";
import { Conversation } from "../views/pages/Conversation";



export const RoutePath = () => 
(
    <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='/appraisal/#/dashboard' element={<Dashboard />}></Route>
        <Route path='/#/performance' element={<Performance />}></Route>
        <Route path='#/resource' element={<Resource />}></Route>
        <Route path='files' element={<Files />}></Route>
        <Route path='user' element={<User />}></Route>
        <Route path='department' element={<Department />}></Route>
        <Route path='roles' element={<Roles />}></Route>
        <Route path='privilege' element={<Privilege />}></Route>
        <Route path='permission' element={<Permission />}></Route>
        <Route path='questionaire' element={<Questionaire />}></Route>
        <Route path='/appraisal/#/questionaire' element={<Questionaire />}></Route>
        <Route path='questions' element={<Questions />}></Route>
        <Route path='report' element={<Report />}></Route>
        <Route path='goal' element={<Goal />}></Route>
        <Route path='task' element={<Task />}></Route>
        <Route path='forgot' element={<Forgot />}></Route>
        <Route path='reset' element={<Reset />}></Route>
        <Route path='appraisal' element={<Appraisal />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='appraisals' element={<Appraisals />}></Route>
        <Route path='by-department' element={<AnswersByDepartment />}></Route>
        <Route path='appraisal-setting' element={<AppraisalSetting />}></Route>
        <Route path='interaction' element={<Interaction />}></Route>
        <Route path='company' element={<Company />}></Route>
        <Route path='answers' element={<Answers />}></Route>
        <Route path='question' element={<Question />}></Route>
        <Route path='conversation' element={<Conversation />}></Route>
    </Routes>
)