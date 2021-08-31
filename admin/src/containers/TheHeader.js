import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import Preview from "../views/Preview/Preview";
import './preview-modal.css'

// routes config
import routes from "../routes";
import { firebase_app } from "src/firebase/firebase";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        {/* Dashboard Page */}
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem> */}
        {/* Users Page */}
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/gallery">Gallery</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/mailing-list">Mailing List</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="#">CMS</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CButton color='primary' onClick={() => firebase_app.auth().signOut()} className="mr-1">
            Sign out
          </CButton>
          <CButton color='primary' onClick={toggle} className="mr-1">
            Preview
          </CButton>

          <CModal size='xl' show={modal} onClose={toggle}>
            <CModalHeader closeButton>Horizon Preview</CModalHeader>
            <CModalBody>
              <Preview />
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={toggle}>
                Cancel
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
