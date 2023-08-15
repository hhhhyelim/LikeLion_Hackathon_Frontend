import React from "react";
import styled from "styled-components";
import { Grids, TextLabel, Button } from "../elements/Index";

const MyPage = ( {navigation} ) => {

    const user = useSelector(state => state.user.userInfo);
    console.log(user)
  
    return (
      <Grids>
        <Header title="마이페이지" />
        <Grids
          is_flex
          justify_content="space-between"
          padding="20px"
          _onClick={() => {
          }}
        >
          <Grids is_flex gap="20px" postion="relative">
            <ProfileOuter>
              <Profile src={user.imgUrl} />
            </ProfileOuter>
            <Grids
              is_flex
              flex_direction="column"
              align_items="flex-start"
              gap="10px"
            >
              <TextLabel F_size="17px" F_weight="bold">
                {user.userName}
              </TextLabel>
              
            <TextLabel F_color="#4D5159" F_weight="500">
            {user.userLocation}
            </TextLabel>
          </Grids>
        </Grids>
        <Button Border="none" BG_color="white">  
          <Grids>
            <IoChevronForwardOutline />
          </Grids>
        </Button>
      </Grids>
      <Grids
        Border="2px dashed #FF7E36"
        padding="15px"
        margin="0 20px"
        B_radius="5px"
        is_flex
        justify_content="space-between"
      >
      </Grids>
      <Grids
        is_flex
        justify_content="space-around"
        margin="20px 0"
        font_size="20px"
        color="#4D5159"
      >
        <Grids
          is_flex
          flex_direction="column"
          gap="10px"
          _onClick={() => {
          }}
        >
          {/* <Icon src={sellIcon} /> */}
          <TextLabel F_size="16px" F_weight="550">
            생년월일
          </TextLabel>

          <TextLabel F_size="16px" F_weight="550">
            성별
          </TextLabel>

          <TextLabel F_size="16px" F_weight="550">
            지역
          </TextLabel>
        </Grids>
        <Grids
          is_flex
          flex_direction="column"
          gap="10px"
          _onClick={() => {
            history.push("/mypage/buy");
          }}
        >
          {/* <Icon src={buyIcon} /> */}
        </Grids>
        <Grids
          is_flex
          flex_direction="column"
          gap="10px"
          _onClick={() => {
            history.push("/mypage/like");
          }}
        >
        </Grids>
      </Grids>
      <Footer />
    </Grids>
  );
};


MyPage.defaultProps = {};

const ProfileOuter = styled.div`
  width: 80px;
  height: 80px;
`;

const Profile = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
//   background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 30px;
`;

// const PayImage = styled.img`
//   width: 55px;
// `;

// const Icon = styled.img`
//   width: 70px;
// `;

export default MyPage;