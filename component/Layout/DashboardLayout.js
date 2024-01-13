import React from 'react'
import Sidebar from '../../pages/dashboard/Sidebar'
import Header from './Header'


const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="dashboard-wrapper">
        <aside className="left-sidebar">
          <Sidebar />
        </aside>
        <div className="page-content">
          <div className="dashboard-header">
            <Header/>
          </div>
          <div className="dashboard-content">
            {children}
          </div>
          <div className="dashboard-footer">

          </div>
        </div>
      </div>

      {/* <!DOCTYPE html>
<html lang="en" dir="ltr">

  <body class="header-fixed sidebar-fixed sidebar-dark header-light" id="body">
   
    <!-- ====================================
    ——— WRAPPER
    ===================================== -->
    <div class="wrapper">
      <!-- ====================================
          ——— LEFT SIDEBAR WITH OUT FOOTER
        ===================================== -->
        <aside class="left-sidebar bg-sidebar">
          <div id="sidebar" class="sidebar">
            <!-- Aplication Brand -->
            <div class="app-brands">
              <a href="/index.html" title="Sleek Dashboard">
                <img src="./assets/img/logo.png" alt="" />
              </a>
            </div>
  
            <!-- begin sidebar scrollbar -->
            <div class="" data-simplebar style="height: 100%">
              <!-- sidebar menu -->
              <ul class="nav sidebar-inner" id="sidebar-menu">
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/index.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Dashboard</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/analytics.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Analytics</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/user-list.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Users</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a
                    class="sidenav-item-link"
                    href="javascript:void(0)"
                    data-toggle="collapse"
                    data-target="#dashboard"
                    aria-expanded="false"
                    aria-controls="dashboard"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.98127 2.5135V6.63816H7.10593V2.5135H2.98127ZM2.98127 0.451172H7.10593C7.6529 0.451172 8.17746 0.668452 8.56422 1.05521C8.95098 1.44198 9.16826 1.96654 9.16826 2.5135V6.63816C9.16826 7.18512 8.95098 7.70968 8.56422 8.09645C8.17746 8.48321 7.6529 8.70049 7.10593 8.70049H2.98127C2.43431 8.70049 1.90975 8.48321 1.52299 8.09645C1.13623 7.70968 0.918945 7.18512 0.918945 6.63816V2.5135C0.918945 1.96654 1.13623 1.44198 1.52299 1.05521C1.90975 0.668452 2.43431 0.451172 2.98127 0.451172V0.451172ZM15.3552 0.451172H19.4799C20.0269 0.451172 20.5514 0.668452 20.9382 1.05521C21.325 1.44198 21.5422 1.96654 21.5422 2.5135V6.63816C21.5422 7.18512 21.325 7.70968 20.9382 8.09645C20.5514 8.48321 20.0269 8.70049 19.4799 8.70049H15.3552C14.8083 8.70049 14.2837 8.48321 13.897 8.09645C13.5102 7.70968 13.2929 7.18512 13.2929 6.63816V2.5135C13.2929 1.96654 13.5102 1.44198 13.897 1.05521C14.2837 0.668452 14.8083 0.451172 15.3552 0.451172V0.451172ZM15.3552 2.5135V6.63816H19.4799V2.5135H15.3552ZM15.3552 12.8251H19.4799C20.0269 12.8251 20.5514 13.0424 20.9382 13.4292C21.325 13.816 21.5422 14.3405 21.5422 14.8875V19.0121C21.5422 19.5591 21.325 20.0837 20.9382 20.4704C20.5514 20.8572 20.0269 21.0745 19.4799 21.0745H15.3552C14.8083 21.0745 14.2837 20.8572 13.897 20.4704C13.5102 20.0837 13.2929 19.5591 13.2929 19.0121V14.8875C13.2929 14.3405 13.5102 13.816 13.897 13.4292C14.2837 13.0424 14.8083 12.8251 15.3552 12.8251ZM15.3552 14.8875V19.0121H19.4799V14.8875H15.3552ZM2.98127 12.8251H7.10593C7.6529 12.8251 8.17746 13.0424 8.56422 13.4292C8.95098 13.816 9.16826 14.3405 9.16826 14.8875V19.0121C9.16826 19.5591 8.95098 20.0837 8.56422 20.4704C8.17746 20.8572 7.6529 21.0745 7.10593 21.0745H2.98127C2.43431 21.0745 1.90975 20.8572 1.52299 20.4704C1.13623 20.0837 0.918945 19.5591 0.918945 19.0121V14.8875C0.918945 14.3405 1.13623 13.816 1.52299 13.4292C1.90975 13.0424 2.43431 12.8251 2.98127 12.8251ZM2.98127 14.8875V19.0121H7.10593V14.8875H2.98127Z"
                        fill="white"
                      />
                    </svg>
  
                    <span class="nav-text">Nft Collection </span>
                    <b class="caret"></b>
                  </a>
                  <ul class="collapse" id="dashboard" data-parent="#sidebar-menu">
                    <div class="sub-menu">
                      <li class="active">
                        <a class="sidenav-item-link" href="/collection-catagory-list.html">
                          <span class="nav-text">Collection Catagory</span>
                        </a>
                      </li>
                      <li class="">
                        <a class="sidenav-item-link" href="/nft-list.html">
                          <span class="nav-text">Collection List</span>
                        </a>
                      </li>
                      <li class="">
                        <a class="sidenav-item-link" href="user-list.html">
                          <span class="nav-text">Create Collection</span>
                        </a>
                      </li>
                      <li class="">
                        <a class="sidenav-item-link" href="/user-list.html">
                          <span class="nav-text">Genarate Collection</span>
                        </a>
                      </li>
                      <li class="">
                        <a class="sidenav-item-link" href="/user-list.html">
                          <span class="nav-text">Genarated Collection</span>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/customer-list.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Customer list</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/Subscriber-list.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Subscriber list</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/transactions.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Transactions</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a class="sidenav-item-link" href="/_blog-list.html">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1826 5.98626V3.12912H2.18262V5.98626H18.1826ZM18.1826 10.272H2.18262V17.4148H18.1826V10.272ZM2.18262 0.271973H18.1826C18.7131 0.271973 19.2218 0.572992 19.5968 1.10881C19.9719 1.64463 20.1826 2.37135 20.1826 3.12912V17.4148C20.1826 18.1726 19.9719 18.8993 19.5968 19.4351C19.2218 19.971 18.7131 20.272 18.1826 20.272H2.18262C1.65218 20.272 1.14348 19.971 0.768404 19.4351C0.393331 18.8993 0.182617 18.1726 0.182617 17.4148V3.12912C0.182617 2.37135 0.393331 1.64463 0.768404 1.10881C1.14348 0.572992 1.65218 0.271973 2.18262 0.271973ZM4.18262 13.1291H5.18262C5.44783 13.1291 5.70219 13.2796 5.88972 13.5475C6.07726 13.8154 6.18262 14.1788 6.18262 14.5577C6.18262 14.9366 6.07726 15.2999 5.88972 15.5678C5.70219 15.8357 5.44783 15.9863 5.18262 15.9863H4.18262C3.9174 15.9863 3.66305 15.8357 3.47551 15.5678C3.28797 15.2999 3.18262 14.9366 3.18262 14.5577C3.18262 14.1788 3.28797 13.8154 3.47551 13.5475C3.66305 13.2796 3.9174 13.1291 4.18262 13.1291ZM9.18262 13.1291H14.1826C14.4478 13.1291 14.7022 13.2796 14.8897 13.5475C15.0773 13.8154 15.1826 14.1788 15.1826 14.5577C15.1826 14.9366 15.0773 15.2999 14.8897 15.5678C14.7022 15.8357 14.4478 15.9863 14.1826 15.9863H9.18262C8.9174 15.9863 8.66305 15.8357 8.47551 15.5678C8.28797 15.2999 8.18262 14.9366 8.18262 14.5577C8.18262 14.1788 8.28797 13.8154 8.47551 13.5475C8.66305 13.2796 8.9174 13.1291 9.18262 13.1291Z"
                        fill="#fff"
                      />
                    </svg>
  
                    <span class="nav-text">Blog</span>
                  </a>
                </li>
                <li class="has-sub">
                  <a
                    class="sidenav-item-link"
                    href="javascript:void(0)"
                    data-toggle="collapse"
                    data-target="#support"
                    aria-expanded="false"
                    aria-controls="support"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.98127 2.5135V6.63816H7.10593V2.5135H2.98127ZM2.98127 0.451172H7.10593C7.6529 0.451172 8.17746 0.668452 8.56422 1.05521C8.95098 1.44198 9.16826 1.96654 9.16826 2.5135V6.63816C9.16826 7.18512 8.95098 7.70968 8.56422 8.09645C8.17746 8.48321 7.6529 8.70049 7.10593 8.70049H2.98127C2.43431 8.70049 1.90975 8.48321 1.52299 8.09645C1.13623 7.70968 0.918945 7.18512 0.918945 6.63816V2.5135C0.918945 1.96654 1.13623 1.44198 1.52299 1.05521C1.90975 0.668452 2.43431 0.451172 2.98127 0.451172V0.451172ZM15.3552 0.451172H19.4799C20.0269 0.451172 20.5514 0.668452 20.9382 1.05521C21.325 1.44198 21.5422 1.96654 21.5422 2.5135V6.63816C21.5422 7.18512 21.325 7.70968 20.9382 8.09645C20.5514 8.48321 20.0269 8.70049 19.4799 8.70049H15.3552C14.8083 8.70049 14.2837 8.48321 13.897 8.09645C13.5102 7.70968 13.2929 7.18512 13.2929 6.63816V2.5135C13.2929 1.96654 13.5102 1.44198 13.897 1.05521C14.2837 0.668452 14.8083 0.451172 15.3552 0.451172V0.451172ZM15.3552 2.5135V6.63816H19.4799V2.5135H15.3552ZM15.3552 12.8251H19.4799C20.0269 12.8251 20.5514 13.0424 20.9382 13.4292C21.325 13.816 21.5422 14.3405 21.5422 14.8875V19.0121C21.5422 19.5591 21.325 20.0837 20.9382 20.4704C20.5514 20.8572 20.0269 21.0745 19.4799 21.0745H15.3552C14.8083 21.0745 14.2837 20.8572 13.897 20.4704C13.5102 20.0837 13.2929 19.5591 13.2929 19.0121V14.8875C13.2929 14.3405 13.5102 13.816 13.897 13.4292C14.2837 13.0424 14.8083 12.8251 15.3552 12.8251ZM15.3552 14.8875V19.0121H19.4799V14.8875H15.3552ZM2.98127 12.8251H7.10593C7.6529 12.8251 8.17746 13.0424 8.56422 13.4292C8.95098 13.816 9.16826 14.3405 9.16826 14.8875V19.0121C9.16826 19.5591 8.95098 20.0837 8.56422 20.4704C8.17746 20.8572 7.6529 21.0745 7.10593 21.0745H2.98127C2.43431 21.0745 1.90975 20.8572 1.52299 20.4704C1.13623 20.0837 0.918945 19.5591 0.918945 19.0121V14.8875C0.918945 14.3405 1.13623 13.816 1.52299 13.4292C1.90975 13.0424 2.43431 12.8251 2.98127 12.8251ZM2.98127 14.8875V19.0121H7.10593V14.8875H2.98127Z"
                        fill="white"
                      />
                    </svg>
  
                    <span class="nav-text">Support </span>
                    <b class="caret"></b>
                  </a>
                  <ul class="collapse" id="support" data-parent="#sidebar-menu">
                    <div class="sub-menu">
                      <li class="active">
                        <a class="sidenav-item-link" href="/support-dashboard.html">
                          <span class="nav-text">Support Dashboard</span>
                        </a>
                      </li>
                      <li class="">
                        <a class="sidenav-item-link" href="/ticket-list.html">
                          <span class="nav-text">Ticket</span>
                        </a>
                      </li>
                      <li class="">
                        <a class="sidenav-item-link" href="/ticket-catagory-list.html">
                          <span class="nav-text">Ticket Catagory</span>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </aside>

      <!-- ====================================
        ——— PAGE WRAPPER
        ===================================== -->
      <div class="page-wrapper">
        <!-- Header -->
        <header class="main-header" id="header">
          <nav class="navbar navbar-static-top navbar-expand-lg">
            <!-- Sidebar toggle button -->
            <button id="sidebar-toggler" class="sidebar-toggle">
              <span class="sr-only">Toggle navigation</span>
            </button>
            <!-- search form -->
            <div class="search-form d-none d-lg-inline-block">
              <div class="input-group">
                <button
                  type="button"
                  name="search"
                  id="search-btn"
                  class="btn btn-flat"
                >
                  <i class="mdi mdi-magnify"></i>
                </button>
                <input
                  type="text"
                  name="query"
                  id="search-input"
                  class="form-control"
                  placeholder="Search something.."
                  autofocus
                  autocomplete="off"
                />
              </div>
            </div>

            <div class="navbar-right">
              <ul class="nav navbar-nav">
                <li class="dropdown notifications-menu custom-dropdown">
                  <button
                    class="dropdown-toggle notify-toggler custom-dropdown-toggler"
                  >
                    <i class="mdi mdi-bell-outline"></i>
                  </button>

                  <div
                    class="card card-default dropdown-notify dropdown-menu-right mb-0"
                  >
                    <div class="card-header card-header-border-bottom px-3">
                      <h2>Notifications</h2>
                    </div>

                    <div class="card-body px-0 py-3">
                      <ul
                        class="nav nav-tabs nav-style-border p-0 justify-content-between"
                        id="myTab"
                        role="tablist"
                      >
                        <li class="nav-item mx-3 my-0 py-0">
                          <a
                            class="nav-link active pb-3"
                            id="home2-tab"
                            data-toggle="tab"
                            href="#home2"
                            role="tab"
                            aria-controls="home2"
                            aria-selected="true"
                            >All (11)</a
                          >
                        </li>

                        <li class="nav-item mx-3 my-0 py-0">
                          <a
                            class="nav-link pb-3"
                            id="profile2-tab"
                            data-toggle="tab"
                            href="#profile2"
                            role="tab"
                            aria-controls="profile2"
                            aria-selected="false"
                            >Msgs (6)</a
                          >
                        </li>

                        <li class="nav-item mx-3 my-0 py-0">
                          <a
                            class="nav-link pb-3"
                            id="contact2-tab"
                            data-toggle="tab"
                            href="#contact2"
                            role="tab"
                            aria-controls="contact2"
                            aria-selected="false"
                            >Others (5)</a
                          >
                        </li>
                      </ul>

                      <div class="tab-content" id="myTabContent3">
                        <div
                          class="tab-pane fade show active"
                          id="home2"
                          role="tabpanel"
                          aria-labelledby="home2-tab"
                        >
                          <ul
                            class="list-unstyled"
                            data-simplebar
                            style="height: 360px"
                          >
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification media-active"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="profile2"
                          role="tabpanel"
                          aria-labelledby="profile2-tab"
                        >
                          <ul
                            class="list-unstyled"
                            data-simplebar
                            style="height: 360px"
                          >
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification media-active"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="contact2"
                          role="tabpanel"
                          aria-labelledby="contact2-tab"
                        >
                          <ul
                            class="list-unstyled"
                            data-simplebar
                            style="height: 360px"
                          >
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification media-active"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                            <li>
                              <a href="javscript:void(0)">
                                <a
                                  href="/message-preview.html"
                                  class="media media-message media-notification"
                                >
                                  <div class="position-relative mr-3">
                                    <img
                                      class="rounded-circle"
                                      src="assets/img/user/u2.jpg"
                                      alt="Image"
                                    />
                                    <span class="status away"></span>
                                  </div>
                                  <div
                                    class="media-body d-flex justify-content-between"
                                  >
                                    <div class="message-contents">
                                      <h4 class="title">Aarn</h4>
                                      <p class="last-msg">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam itaque doloremque
                                        odio, eligendi delectus vitae.
                                      </p>

                                      <span
                                        class="font-size-12 font-weight-medium text-black-50"
                                      >
                                        <i class="mdi mdi-clock-outline"></i> 30
                                        min ago...
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul class="dropdown-menu dropdown-menu-right d-none">
                    <li class="dropdown-header">You have 5 notifications</li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-account-plus"></i> New user registered
                        <span class="font-size-12 d-inline-block float-right"
                          ><i class="mdi mdi-clock-outline"></i> 10 AM</span
                        >
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-account-remove"></i> User deleted
                        <span class="font-size-12 d-inline-block float-right"
                          ><i class="mdi mdi-clock-outline"></i> 07 AM</span
                        >
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chart-areaspline"></i> Sales report is
                        ready
                        <span class="font-size-12 d-inline-block float-right"
                          ><i class="mdi mdi-clock-outline"></i> 12 PM</span
                        >
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-account-supervisor"></i> New client
                        <span class="font-size-12 d-inline-block float-right"
                          ><i class="mdi mdi-clock-outline"></i> 10 AM</span
                        >
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-server-network-off"></i> Server
                        overloaded
                        <span class="font-size-12 d-inline-block float-right"
                          ><i class="mdi mdi-clock-outline"></i> 05 AM</span
                        >
                      </a>
                    </li>
                    <li class="dropdown-footer">
                      <a class="text-center" href="#"> View All </a>
                    </li>
                  </ul>
                </li>
                <!-- User Account -->
                <li class="dropdown user-menu">
                  <button
                    href="#"
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                  >
                    <img
                      src="assets/img/user/user.png"
                      class="user-image"
                      alt="User Image"
                    />
                    <span class="d-none d-lg-inline-block">Abdus Salam</span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <!-- User image -->
                    <li class="dropdown-header">
                      <img
                        src="assets/img/user/user.png"
                        class="img-circle"
                        alt="User Image"
                      />
                      <div class="d-inline-block">
                        Abdus Salam
                        <small class="pt-1">iamabdus@gmail.com</small>
                      </div>
                    </li>

                    <li>
                      <a href="user-profile.html">
                        <i class="mdi mdi-account"></i> My Profile
                      </a>
                    </li>
                    <li>
                      <a href="#"> <i class="mdi mdi-email"></i> Message </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-diamond-stone"></i> Projects
                      </a>
                    </li>
                    <li class="right-sidebar-in">
                      <a href="javascript:0">
                        <i class="mdi mdi-settings"></i> Setting
                      </a>
                    </li>

                    <li class="dropdown-footer">
                      <a href="index.html">
                        <i class="mdi mdi-logout"></i> Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <!-- ====================================
          ——— CONTENT WRAPPER
          ===================================== -->
        <div class="content-wrapper">
          <div class="content">
            <!-- Top Statistics -->
            <div class="row"> 
              <div class="col-xl-3 col-sm-6">
                <div class="card card-mini mb-4">
                  <div class="card-body card-items card-items-1">
                    <div class="card-item card-item-1">
                      <img
                        src="./assets/img/icon/dashboard-icon/1.svg"
                        alt=""
                      />
                    </div>
                    <div class="card-item">
                      <p>Total Users</p>
                      <h2 class="mb-1">70</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="card card-mini mb-4">
                  <div class="card-body card-items card-items-2">
                    <div class="card-item card-item-1">
                      <img
                        src="./assets/img/icon/dashboard-icon/2.svg"
                        alt=""
                      />
                    </div>
                    <div class="card-item">
                      <p>Total Artworks</p>
                      <h2 class="mb-1">70</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="card card-mini mb-4">
                  <div class="card-body card-items card-items-3">
                    <div class="card-item card-item-1">
                      <img
                        src="./assets/img/icon/dashboard-icon/3.svg"
                        alt=""
                      />
                    </div>
                    <div class="card-item">
                      <p>Total Earned</p>
                      <h2 class="mb-1">70</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="card card-mini mb-4">
                  <div class="card-body card-items card-items-4">
                    <div class="card-item card-item-1">
                      <img
                        src="./assets/img/icon/dashboard-icon/4.svg"
                        alt=""
                      />
                    </div>
                    <div class="card-item">
                      <p>Total Minted</p>
                      <h2 class="mb-1">70</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <!-- User activity statistics -->
                <div class="card card-default" id="user-revenue">
                  <div class="row no-gutters">
                    <div class="col-xl-12">
                      <div class="border-right">
                        <div class="card-header justify-content-between py-5">
                          <h2>Revenue Status</h2>
                          <div class="date-range-report">
                            <div class="input-group mb-3">
                              <select class="custom-select">
                                <option selected>Filter By Date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="tab-content" id="myTabContent">
                            <div
                              class="tab-pane fade show active"
                              id="user"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                            >
                              <canvas id="revenue" class="chartjs"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Content -->
        </div>
        <!-- End Content Wrapper -->

        <!-- Footer -->
        <footer class="footer mt-auto">
          <div class="copyright bg-white">
            <p>
              Copyright &copy; <span id="copy-year"></span> a by
              <a
                class="text-success"
                href="https://musicpromotiontoday.com/"
                target="_blank"
              >
                Musicpromotiontoday
              </a>
            </p>
          </div>
          <script>
            var d = new Date();
            var year = d.getFullYear();
            document.getElementById("copy-year").innerHTML = year;
          </script>
        </footer>
      </div>
    
    </div>
   
  </body>
</html> */}
    </>
  )
}

export default DashboardLayout