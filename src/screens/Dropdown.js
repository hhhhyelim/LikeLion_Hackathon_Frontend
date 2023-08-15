import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const Dropdown = () => {
  //드롭다운 열고 닫기
  const [open, setOpen] = useState(false);
  
  // 라이브러리에 기본값을 설정할 수 있는 defaultValue 속성이 없어졌다고 하여 value를 초기화할 때 기본값을 지정해주었다.
  const [value, setValue] = useState({label: '송파구', value: '1'});

  // 드롭다운 메뉴에 들어갈 아이템들 {label: '메뉴명', value: '값} 형태
  const [items, setItems] = useState([
    { label: '송파구', value: '1' },
    { label: '강서구', value: '2' },
    { label: '노원구', value: '3' },
    { label: '은평구', value: '4' },
  ]);
  
   
  return (
   <View style={styles.container}>
      <DropDownPicker 
         open={open}
         value={value}
         items={items}
         placeholder="송파구"
         setOpen={setOpen}
         setValue={setValue}
         setItems={setItems}
      /> 

   </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 130,

    paddingLeft: 15,
    backgroundColor: 'white',
    zIndex: 1000,
  },

});

export default Dropdown;

