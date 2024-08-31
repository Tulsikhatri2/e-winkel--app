import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from "../../Assets/logo.PNG";
import { useSelector } from "react-redux";
import UsersData from "../../Components/UserData";

const UserDashboard = () => {
  const { userLoginData } = useSelector((state) => state.auth);
  console.log(userLoginData, "dash");
  return (
    <Box className="dashboard">
      <Box className="dashboardNav">
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ backgroundColor: "white" }} className="nav">
            <img
              src={logo}
              width="7%"
              height="80%"
              style={{ marginLeft: "5vw" }}
            />
          </Toolbar>
        </AppBar>

        <Box className="dashboardDetails">
          <Box className="sideDrawer">
            <p
              onClick={() => {
                // dispatch(userDisplay(userToken));
                // dispatch(usersInfo(true))
              }}
            >
              Users
            </p>

            <p
              onClick={() => {
                //   dispatch(displayingCategories(userToken))
                //   dispatch(categoryInfo(true))
              }}
            >
              Categories
            </p>

            <p
              onClick={() => {
                //   dispatch(productsInfo(true))
              }}
            >
              Products
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontFamily: "Laila, serif",
                fontWeight: "bold",
                marginTop: "3vh",
                "&:hover": {
                  backgroundColor: "#C4C4C4",
                  color: "red",
                  fontWeight: "bold",
                },
              }}
            >
              Logout
            </Button>
          </Box>
          <Box>
            {/* {isUser?(
              <>
              <UsersData users={allUsersData} userToken={userToken}/>
              </>
            ):
            (isProduct?(<>
            <ProductData/>
            </>):
            (isCategory?(
              <>
              <CategoryData categories={allCategoryData}/>
              </>
            ):(<></>)))}
             */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
