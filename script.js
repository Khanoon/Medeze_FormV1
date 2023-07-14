// ตัวเเปร
const form = document.getElementById("form");
const num = document.getElementById("EMERGENCY_mobile");
const num2 = document.getElementById("PHONE_spouse");
const num3 = document.getElementById("mobile_me");
const num4 = document.getElementById("POSITION_MOBILE");
const num5 = document.getElementById("POSITION_MOBILE2");
const num6 = document.getElementById("numcar");
const num7 = document.getElementById("numcar2");
const bug = document.getElementById("PHONE_spouse");
const selectElements = [
  "company_job",
  "employment_job",
  "mr_mrs",
  "blood_group",
  "NATIONALITY",
  "RELIGION",
  "SERVICE",
  "STATUS_Single",
  "FATHER_status",
  "MOTHER_status",
  "EMERGENCY_mobile",
  "khow_works",
  "SPEAKING_eng",
  "READING_eng",
  "WRITING_eng",
  "SPEAKING_thai",
  "READING_thai",
  "WRITING_thai",
  "SPEAKING_chin",
  "READING_chin",
  "WRITING_chin",
  "COMPANY_Yes_no",
  "spouse_name",
  "PHONE_spouse",
  "APPLICATION",
  "COMPANY_name",
  "spouse_name_disabled",
  "PHONE_spouse_disabled",
  "APPLICATION_disabled",
  "COMPANY_name_disabled",
];
const inputElements = [
  "salary_monny",
  "fullname_th",
  "start_job",
  "fullname_eng",
  "nick_name",
  "birthdaytime",
  "id_card_me",
  "height_me",
  "kg_me",
  "mobile_me",
  "email_me",
  "CHILDREN",
  "FATHER_name",
  "FATHER_occ",
  "FATHER_age",
  "MATHER_name",
  "MATHER_occ",
  "MATHER_age",
  "EMERGENCY_name",
  "EMERGENCY_mobile",
  "EMERGENCY_relationship",
  "PERSONAL_name",
  "RELATIONSHIP_personal",
  "POSITION_name",
  "POSITION_MOBILE",
  "PERSONAL_name2",
  "COMPANY_name1",
  "COMPANY_name2",
  "POSITION_MOBILE2",
  "RELATIONSHIP_personal2",
  "POSITION_name2",
  "formFile1",
  "formFile2",
  "formFile3",
  "formFile4",
  "formFile5",
];
const selectElements2 = [
  "company_job",
  "employment_job",
  "mr_mrs",
  "blood_group",
  "NATIONALITY",
  "RELIGION",
  "SERVICE",
  "STATUS_Single",
  "FATHER_status",
  "MOTHER_status",
  "EMERGENCY_mobile",
  "khow_works",
  "SPEAKING_eng",
  "READING_eng",
  "WRITING_eng",
  "SPEAKING_thai",
  "READING_thai",
  "WRITING_thai",
  "SPEAKING_chin",
  "READING_chin",
  "WRITING_chin",
  "COMPANY_Yes_no",
];
const khow_works = document.getElementById("khow_works");

//....................submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = Array.from(document.querySelectorAll("#form input"));
  const divs = Array.from(document.querySelectorAll("div"));
  const textareaC = document.getElementById("ADDRESS_me");


  checkRequired(inputs, divs);
  checkSele(selectElements);
  const isRequiredValid = checkRequired_sudmin(inputs, divs);
  const isSeleValid = checkSele_submin(selectElements2);
  const isEmailValid = check_Email(inputElements[10]);
  const isTextareaValid = handleElementValue(textareaC);
  const isPhoneValid = check_phone_submin(
    num,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7
  );
  const isChange_Color_TODO_submin= Change_Color_TODO_submin(clickCount, clickCount1, clickCount3);
  check_phone(num, num2, num3, num4, num5, num6, num7);
  Change_Color_TODO(clickCount)
  Change_Color_TODO1( clickCount1)
  Change_Color_TODO2(clickCount3) 

  bug.style="";
  console.log(bug);
  const isAllValid =
     isRequiredValid &&
     isSeleValid &&
     isTextareaValid &&
     isEmailValid &&
    isPhoneValid &&
    isChange_Color_TODO_submin;

  if (isAllValid) {
    alert("success!");
    return true;
  } else {
    let errorMessage = "Validation failed. Errors:";
    if (!isRequiredValid) {
      errorMessage += "\n- Required fields are missing.";
    }
    if (!isSeleValid) {
      errorMessage += "\n- Invalid select elements.";
    }
    if (!isTextareaValid) {
      errorMessage += "\n- Invalid textarea.";
    }
    if (!isEmailValid) {
      errorMessage += "\n- Invalid email.";
    }
    if (!isPhoneValid) {
      errorMessage += "\n- Invalid phone number.";
    }
    if (!isChange_Color_TODO_submin) {
      errorMessage += "\n- Invalid TODO.";
    }
    alert(errorMessage);
    return false;
  }


  // if (clickCount != 0 && clickCount1 != 0 && clickCount3 != 0) {
  //   alert(`SUCCESS : clickCount = ${clickCount}, clickCount1 = ${clickCount1}, clickCount3 = ${clickCount3}`)
  //   return true;
  // } else {
  //   alert(`FAILED : clickCount = ${clickCount}, clickCount1 = ${clickCount1}, clickCount3 = ${clickCount3}`)
  //   return false;
  // }
});

// เปลี่ยนสี TODO เมื่อไม่กดเพิ่ม TODO มากรอก ประวัติการศึกษา
function Change_Color_TODO(clickCount){
  const one1 = document.getElementById("gknn1");
  if (clickCount === 0) {
    one1.className = "card border-danger mb-5";
  } else {
    one1.className = "card  mb-5";
  }
}
// เปลี่ยนสี TODO เมื่อไม่กดเพิ่ม TODO มากรอก ประวัติการทำงาน
function Change_Color_TODO1( clickCount1) {
  const one2 = document.getElementById("gknn3");
  if (clickCount1 === 0) {
    one2.className = "card border-danger mb-5";
  } else {
    one2.className = "card  mb-5";
  }
}
// เปลี่ยนสี TODO เมื่อไม่กดเพิ่ม TODO มากรอก การฝึกอบรม
function Change_Color_TODO2(clickCount3) {
  const one3 = document.getElementById("gknn2");
  if (clickCount3 === 0) {
    one3.className = "card border-danger mb-5";
  } else {
    one3.className = "card  mb-5";
  }
}
// เช็คtextarea
function handleElementValue(textareaC) {
  if (textareaC.value !== "") {
    textareaC.style.borderColor = "var(--succes-color)";
    return true;
  }
  if (textareaC.value === "") {
    textareaC.style.borderColor = "var(--error-color)";
    return false;
  }
}
// เช็ค ฟีว select
function checkSele(selectElements) {
  selectElements.forEach(function (elementId) {
    const element = document.getElementById(elementId);

    if (
      element.value === "1" ||
      element.value === "สมรส" ||
      element.value === "รู้จัก"
    ) {
      element.style.borderColor = "var(--succes-color)";
     
    }

    if (element.value === "0") {
      element.style.borderColor = "var(--error-color)";
     
    }
    if (
      element.id === "spouse_name_disabled" ||
      element.id === "PHONE_spouse_disabled" ||
      element.id === "APPLICATION_disabled" ||
      element.id === "COMPANY_name_disabled"
    ) {
      element.style.borderColor = "";
    }
  });
}
//checkRequired ของinput
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (
      input.disabled ||
      input.id === "formFile6" ||
      input.id === "formFile7" ||
      input.id === "formFile8" ||
      input.id === "formFile9" ||
      input.id === "formFile10" ||
      input.id === "OTHER_languahes" ||
      input.id === "facebook_me" ||
      input.id === "EMERGENCY_mobile" ||
      input.id === "email_me" ||
      input.id === "PHONE_spouse"
    ) {
      return;
      //input ไม่เช็ค ระบุตาม idที่ไม่เอาด้านบน
    }
    if (input.value.trim() === "") {
      showError(input); //ถ้ามีค่าว่างให้ส่ง ไปยังshowErrorเพื่อเปลี่ยนกรอบให้เป็นสีเเดง
    } else {
      showSuccess(input); //ถ้ามีไม่ค่าว่างให้ส่ง ไปยังshowSuccessเพื่อเปลี่ยนกรอบให้เป็นสีเขียว
    }
  });
}

//Show input error messages
function showError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control_gknn error";
}
//show success colour
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control_gknn success";
}

// ปิด-เปิดกล่อง เมื่อ เลือกสมรส จะทำการเปิด กล่องให้กรอกทั้ง4กล่อง  ชื่อคู่สมรส เบอร์โทรศัพท์ อาชีพ สถานที่ทำงาน
document
  .getElementById("STATUS_Single")
  .addEventListener("change", function (event) {
    let maritalStatus = event.target.value;
    let spouseNameInput = document.getElementById("spouse_name");
    let spousePhoneInput = document.getElementById("PHONE_spouse");
    let APPLICATIONInput = document.getElementById("APPLICATION");
    let COMPANY_nameInput = document.getElementById("COMPANY_name");
    const one1 = document.getElementById("spouse_name_disabled");
    const two2 = document.getElementById("PHONE_spouse_disabled");
    const therr3 = document.getElementById("APPLICATION_disabled");
    const For4 = document.getElementById("COMPANY_name_disabled");
    // ระบุ id

    if (maritalStatus === "สมรส") {
      // เอาdisabled ออกเมื่อ เลือกสมรส
      spouseNameInput.removeAttribute("disabled");
      spousePhoneInput.removeAttribute("disabled");
      APPLICATIONInput.removeAttribute("disabled");
      COMPANY_nameInput.removeAttribute("disabled");
    } else {
      // ทำการเพิ่ม disabled เข้าสู่id  เเละ
      spouseNameInput.setAttribute("disabled", "");
      one1.className = "form-control_gknn";
      spousePhoneInput.setAttribute("disabled", "");
      two2.className = "form-control_gknn";
      spousePhoneInput.style  ="";
      APPLICATIONInput.setAttribute("disabled", "");
      therr3.className = "form-control_gknn";
      COMPANY_nameInput.setAttribute("disabled", "");
      For4.className = "form-control_gknn";
      // ทำการรีค่า ตอน disabled
      spouseNameInput.value = "";
      spousePhoneInput.value = "";
      APPLICATIONInput.value = "";
      COMPANY_nameInput.value = "";
    }
  });

// เปิด-ปิดช่องให้กรอกโรคที่1 เมื่อเลือก เคย เคยจะมีvalue = 2 จะทำการเปิดช่องให้กรอกโรคที่1
document.getElementById("HAD").addEventListener("change", function (event) {
  let maritalStatus = event.target.value;
  let spouseNameInput = document.getElementById("DISEASE1");
  if (maritalStatus === "2") {
    // ถ้า มีค่า เป็น2เข้ามาจะทำการเอา disabled ออก เพื่อเปิดช่องให้กรอก
    spouseNameInput.removeAttribute("disabled");
  } else {
    spouseNameInput.setAttribute("disabled", "");
    // เมื่อค่าเป็นตัวอื่นจะทำการ เพิ่ม disabled เข้ามาเพื่อปิดช่อง ไม่ให้กรอก
  }
});
// เปิด-ปิดช่องให้กรอกโรคที่2 เมื่อเลือก เคย เคยจะมีvalue = 2 จะทำการเปิดช่องให้กรอกโรคที่2
document
  .getElementById("hospital_day")
  .addEventListener("change", function (event) {
    let maritalStatus = event.target.value;
    let spouseNameInput = document.getElementById("DISEASE2");
    if (maritalStatus === "2") {
      // ถ้า มีค่า เป็น2เข้ามาจะทำการเอา disabled ออก เพื่อเปิดช่องให้กรอก
      spouseNameInput.removeAttribute("disabled");
    } else {
      spouseNameInput.setAttribute("disabled", "");
      // เมื่อค่าเป็นตัวอื่นจะทำการ เพิ่ม disabled เข้ามาเพื่อปิดช่อง ไม่ให้กรอก
    }
  });
// เปิด-ปิดช่องให้กรอกโรคที่3 เมื่อเลือก เคย เคยจะมีvalue = 2 จะทำการเปิดช่องให้กรอกโรคที่3
document
  .getElementById("HAD_UNDERGONE")
  .addEventListener("change", function (event) {
    let maritalStatus = event.target.value;
    let spouseNameInput = document.getElementById("DISEASE3");
    if (maritalStatus === "2") {
      // ถ้า มีค่า เป็น2เข้ามาจะทำการเอา disabled ออก เพื่อเปิดช่องให้กรอก
      spouseNameInput.removeAttribute("disabled");
    } else {
      // เมื่อค่าเป็นตัวอื่นจะทำการ เพิ่ม disabled เข้ามาเพื่อปิดช่อง ไม่ให้กรอก
      spouseNameInput.setAttribute("disabled", "");
    }
  });

// เปิด-ปิด เช็คถูกของ รถยนต์ เพื่อให้ช่องเปิดให้กรอก
document.getElementById("id_car").addEventListener("change", function (car1) {
  var checkbox = car1.target;
  var numcarInput = document.getElementById("numcar");
  if (checkbox.checked) {
    // เมื่อ ติกถูก จะทำการเอา  disabled ออก เพื่อให้กรอก
    numcarInput.removeAttribute("disabled");
  } else {
    // เมื่อติกถูกออก จะทำการเพิ่ม disabled เข้าสู่่ ไอดี เพื่อปิดไม่ให้กรอก
    numcarInput.setAttribute("disabled", "");
  }
});

// เปิด-ปิด เช็คถูกของ จักรยานยนต์ เพื่อให้ช่องเปิดให้กรอก
document.getElementById("id_car2").addEventListener("change", function (car2) {
  var checkbox = car2.target;
  var numcarInput = document.getElementById("numcar2");
  if (checkbox.checked) {
    // เมื่อ ติกถูก จะทำการเอา  disabled ออก เพื่อให้กรอก
    numcarInput.removeAttribute("disabled");
  } else {
    // เมื่อติกถูกออก จะทำการเพิ่ม disabled เข้าสู่่ ไอดี เพื่อปิดไม่ให้กรอก
    numcarInput.setAttribute("disabled", "");
  }
});

// ......................................เสริม........................................
// เช็ค เบอร์
function check_phone(num, num2, num3, num4, num5, num6, num7) {
  const num_length = num.value.length;
  const formControl = num.parentElement;
  const num_length2 = num2.value.length;
  const formControl2 = num2.parentElement;
  const num_length3 = num3.value.length;
  const formControl3 = num3.parentElement;
  const num_length4 = num4.value.length;
  const formControl4 = num4.parentElement;
  const num_length5 = num5.value.length;
  const formControl5 = num5.parentElement;
  const num_length6 = num6.value.length;
  const formControl6 = num6.parentElement;
  const num_length7 = num7.value.length;
  const formControl7 = num7.parentElement;
  if (num_length < 10) {
    formControl.className = "form-control_gknn error";
  } else {
    formControl.className = "form-control_gknn success";
  }
  if (num2.disabled) {
    formControl2.className = "form-control_gknn";
  } else if (num_length2 < 10) {
    formControl2.className = "form-control_gknn error";
  } else {
    formControl2.className = "form-control_gknn success";
  }
  if (num_length3 < 10) {
    formControl3.className = "form-control_gknn error";
  } else {
    formControl3.className = "form-control_gknn success";
  }
  if (num_length4 < 10) {
    formControl4.className = "form-control_gknn error";
  } else {
    formControl4.className = "form-control_gknn success";
  }
  if (num_length5 < 10) {
    formControl5.className = "form-control_gknn error";
  } else {
    formControl5.className = "form-control_gknn success";
  }

  if (num6.disabled) {
    formControl6.className = "form-control_gknn";
  } else if (num_length6 < 10) {
    formControl6.className = "form-control_gknn error";
  } else {
    formControl6.className = "form-control_gknn success";
  }
  if (num7.disabled) {
    formControl7.className = "form-control_gknn";
  } else if (num_length7 < 10) {
    formControl7.className = "form-control_gknn error";
  } else {
    formControl7.className = "form-control_gknn success";
  }
}
// เช็คเมล
function check_Email(emailgknn) {
  const email = document.getElementById(emailgknn);
  const formControl = email.parentElement;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[com]{2,}$/;
  if (!regex.test(email.value.trim())) {
    formControl.className = "form-control_gknn error";
    return false;
  } else {
    formControl.className = "form-control_gknn success";
    return true;
  }
}
//  บล็อคไม่ให้ไฟล์เกิน
function validateFileSize(event) {
  const fileInput = event.target;
  const files = fileInput.files;

  if (files.length > 0) {
    const maxSize = 2 * 1024 * 1024; // 2MB  https://stackoverflow.com/questions/5697605/limit-the-size-of-a-file-upload-html-input-element
    const fileSize = files[0].size;
    if (fileSize > maxSize) {
      alert("File size exceeds the maximum limit of 2MB.");
      fileInput.value = "";
    }
  }
}
// พิมได้เเค่ตัวเลข
function numberOnly(elementId) {
  const inputElement = document.getElementById(elementId);
  // inputElement.addEventListener('input', function(event) {
  let inputValue = event.target.value;
  const sanitizedValue = inputValue.replace(/[^0-9]/g, ""); //พิมได้เเค่0-9
  event.target.value = sanitizedValue;

  const keyCode = event.keyCode || event.which; //บล็อคเเบบโค้ด keyb
  if (
    ((keyCode < 48 || keyCode > 57) &&
      keyCode !== 8 &&
      // && keyCode !== 9
      keyCode !== 37 &&
      keyCode !== 39 &&
      keyCode < 96) ||
    keyCode > 105
  ) {
    event.preventDefault();
  }
  // });
}
// พิมได้เเค่ภาษา THAI
function validateThaiInput(event) {
  const input = event.target;
  const thaiPattern = /^[\u0E00-\u0E7F\s]+$/; // ภาษาไทย

  if (!thaiPattern.test(input.value)) {
    input.value = input.value.replace(/[^\u0E00-\u0E7F\s]+/g, "");
  }
}
// พิมได้เเค่ภาษา ENG
function validateEnglishInput(event) {
  const input = event.target;
  const englishPattern = /^[A-Za-z\s]+$/; // ภาษาอังกฤษ

  if (!englishPattern.test(input.value)) {
    input.value = input.value.replace(/[^A-Za-z\s]+/g, "");
  }
}
// ห้ามพิมอักษรพิเศษ
function Special_Characters(event) {
  var input = event.target.value;
  var nonNumericInput = input.replace(/[+@!~`%$&*"':;?/><?\\|=()#^,]/g, "");
  event.target.value = nonNumericInput;
}
// พิมได้เเค่Textเท่านั้น
function Text_Only(event) {
  var input = event.target.value;
  var nonNumericInput = input.replace(/[0-9]/g, "");
  event.target.value = nonNumericInput;
  return true;
}
// ห้ามenter
function preventEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
}
// คำนวณอายุ
function calculateAge(birthday) {
  var today = new Date(); //วันปัจจุบัน
  var birthDate = new Date(birthday); //
  var age = today.getFullYear() - birthDate.getFullYear(); // ...........อายุ
  return age;
}
document
  .getElementById("birthdaytime")
  .addEventListener("change", function (event) {
    var birthdayInput = event.target;
    var age = calculateAge(birthdayInput.value);
    document.getElementById("age_me").value = age + " ปี"; //ใส่ตัวเเปลที่ได้ลงในid  birthdaytime ในhtml
  });
// ..........................._submin ฟอม ตรวจฟอม ส่วนเมลกับ TextArea จะเช็คจากฟังชั่นของตัวเอง
// เช็ค TODO ว่ามี 0ไหม ถ้า0จะ ทั้ง3Todo จะเช็คไม่ผ่านหรือfalse 
function Change_Color_TODO_submin(clickCount, clickCount1, clickCount3) {
  const one1 = document.getElementById("gknn1");
  const one2 = document.getElementById("gknn2");
  const one3 = document.getElementById("gknn3");

  if (clickCount === 0) {
    return false;
  }

  if (clickCount1 === 0) {
    return false;
  }

  if (clickCount3 === 0) {
    return false;
  }

  return true;
}
// เช็คจำนวณตัวเบอร์ ว่าครบ10ไหมถ้าครบ10จะ ผ่าน ถ้าไม่ถึงจะfalse
function check_phone_submin(num, num2, num3, num4, num5, num6, num7) {
  const num_length = num.value.length;
  const num_length2 = num2.value.length;
  const num_length3 = num3.value.length;
  const num_length4 = num4.value.length;
  const num_length5 = num5.value.length;
  const num_length6 = num6.value.length;
  const num_length7 = num7.value.length;

  if (num_length < 10) {
    return false;
  }

  if (!num2.disabled && num_length2 < 10) {
    return false;
  }

  if (!num3.disabled && num_length3 < 10) {
    return false;
  }

  if (num_length4 < 10 || num_length5 < 10) {
    return false;
  }

  if (!num6.disabled && num_length6 < 10) {
    return false;
  }

  if (!num7.disabled && num_length7 < 10) {
    return false;
  }

  return true;
}
// เช็คว่ามีการกรอก select ไหม ถ้าไม่ เลือกจะมีค่าเป็น 0 จะ false เเละจะต้องกรอกให้ครบทุก select
function checkSele_submin(selectElements) {
  return selectElements.every(function (elementId) {
    const element = document.getElementById(elementId);
    if (element.value === "1" || element.value === "สมรส" || element.value === "รู้จัก") {
      // console.log(element.id);
      return true;
    } else if (element.value === "0") {
      // console.log(`lost ${element.id}`);
      return false;
    }
  return true;
  });
}
// เช็คว่ามีการกรอก inputไหม ถ้าไม่กรอก ทุกช่องที่ *  จะไม่ผานหรือ false
function checkRequired_sudmin(inputArr) {
  return inputArr.every(function (input) {
    if (    input.disabled ||
      input.id === "formFile6" ||
      input.id === "formFile7" ||
      input.id === "formFile8" ||
      input.id === "formFile9" ||
      input.id === "formFile10" ||
      input.id === "OTHER_languahes" ||
      input.id === "facebook_me" ||
      input.id === "EMERGENCY_mobile" ||
      input.id === "email_me" ||
      input.id === "PHONE_spouse" ) {
        return true;
    }
    if (input.value.trim() === "") {
      console.log(`losttttttt    ${input.id}`);
      return false;
    }  else {
      console.log(`winnnn    ${input.id}`);
      return true;
    }
  });
}