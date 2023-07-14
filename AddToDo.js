
// ...................................TODO: ................................

// รู้จักคนในบริษัทไหม
document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-WhoWorks');
    todoItems = [];
    clickCount_Yes_No = 0; 
  
    function addTrainingItem() {
      if (clickCount_Yes_No < 3) {
        const todoItem = document.createElement('div');
        todoItem.id = `XD-${clickCount_Yes_No}`;
        todoItem.className = 'myDIV';
  
        const html = `
            <div class="card-body border-top">
              <div class="p-sm-4 row">
                <div class="col-12 mb-4">
                  <label>โปรดระบุ</label>
                  <span style="color: red;">*</span>
                  <h6>PLEASE FILL</h6>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <label>ชื่อ - นามสกุล</label>
                      <h6>FULLNAME</h6>
                      <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="ชื่อ - นามสกุล"
                          aria-label="Username" value=""
                          id="job-friend-name" aria-describedby="addon-wrapping"
                          onkeydown="preventEnter(event)">
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <label>ความสัมพันธ์</label>
                      <h6>RELATIONSHIP</h6>
                      <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="ความสัมพันธ์"
                          aria-label="Username" value=""
                          id="job-friend-relationship" aria-describedby="addon-wrapping"
                          onkeydown="preventEnter(event)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  
        todoItem.innerHTML = html;
        window.todoItems.push(todoItem);
        todoList.appendChild(todoItem);
  
        clickCount_Yes_No++;
      }
    }
  
    window.addTrainingItem = addTrainingItem;
  });
  function handleKnowWorksChange() {
    const knowWorksSelect = document.getElementById('khow_works');
    const value = knowWorksSelect.value;
  
    if (value === 'รู้จัก') {
      addTrainingItem();
    } else {
      clearTrainingItems();
    }
  }
  function clearTrainingItems() {
    const todoList = document.getElementById('todo-WhoWorks');
    todoList.innerHTML = '';
    todoItems = [];
    clickCount_Yes_No = 0;
  }

//   ประวัติการศึกษา
let clickCount = 0;
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('Record_form1');
  const todoList = document.getElementById('todo-Record');

  let todoItems = [];
  let count_numid = 0;

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault(); 

    if (clickCount < 2) {
      const todoItem = document.createElement('div');
      count_numid++;
      clickCount++;
      // todoItem.setAttribute('id', `Record-${count_numid}`);
      todoItem.id = `Record-${count_numid}`;
      console.log(clickCount);
      const html = `
        <div class="row pt-4 px-4 border-bottom">
          <h6 class="col-12 d-flex justify-content-center">TRAINING, OTHER</h6>
          <div class="col-12 d-flex justify-content-end mb-4">
          <button class="col-auto btn-outline-medeze btn" onclick="deleteTodo(${count_numid})">Delete</button>
          </div>
        <div class="row p-3">
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>วุฒิการศึกษา</label>
            <h6>DEGREE RECEIVED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sda-${count_numid}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-3">
            <label>สถาบันการศึกษา</label>
            <h6>INSTITUTE</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad2-${count_numid}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>สาขาวิชา</label>
            <h6>SUBJECT STUDIED</h6>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="" aria-label="Username" id="sad3-${count_numid}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
            </div>
          </div>
          <div class="col-md-2 col-sm-6 col-xs-3">
            <label>จบปีการศึกษา (ปี)</label>
            <h6>END OF EDUCATION (YEAR)</h6>
            <div class="input-group flex-nowrap">
              <input type="date" name="birthdaytime" class="form-control" id="end_EDUCATION-${count_numid}" onkeydown="preventEnter(event)">
            </div>
          </div>
        </div>
        </div>
      `;
      todoItem.innerHTML = html;
      todoList.appendChild(todoItem);
    } 
    // low2(clickCount);
  });
});
function deleteTodo(index) {
  const todoItem = document.getElementById(`Record-${index}`);
  const todoItemsContainer = todoItem.parentNode;
  todoItemsContainer.removeChild(todoItem);
  clickCount--;
  console.log(clickCount);

}

// ประวัติการทำงาน
let clickCount1 = 0;
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('btn_from2');
  const todoList1 = document.getElementById('todo-list1');

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault();

    if (clickCount1 < 3) {
      const todoItem = document.createElement('div');
      const todoItemId = `sad-${clickCount1 + 1}`;
      clickCount1++;
      todoItem.id = todoItemId;

      const html = `
          <div class="row pt-4 px-4 " id="XD-${todoItemId}">
            <h6 class="col-12 d-flex justify-content-center">TRAINING, OTHER</h6>
            <div class="col-12 d-flex justify-content-end mb-4">
            <button class="btn btn-outline-medeze col-auto" onclick="deleteTodo1('${todoItemId}')">Delete</button>
            </div>
          </div>
          <div class="row p-4 border-bottom">
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>สถานที่ประกอบการ</label>
              <h6>COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_1${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>ตำแหน่ง</label>
              <h6>POSITION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4">
              <label>วันที่เริ่มงาน</label>
              <h6>START DATE</h6>
              <div class="input-group flex-nowrap">
                <input type="date" name="birthdaytime" class="form-control" id="birthdaytime_F${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>วันที่สิ้นสุด</label>
              <h6>FINISH DATE</h6>
              <div class="input-group flex-nowrap">
                <input type="date" name="birthdaytime" class="form-control" id="birthdaytime_L${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>เงินเดือน</label>
              <h6>SALARY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_3${todoItemId}" value=" " aria-describedby="addon-wrapping" oninput="numberOnly(this.id)"  minlength="0" maxlength="6"  onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class=" col-xl-2 col-md-4 col-sm-4 col-xs-4 ">
              <label>สาเหตุที่ออก</label>
              <h6>REASON FOR LEAVING</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="from2_4${todoItemId}" value=" " aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
          </div>`;

      todoItem.innerHTML = html;
      todoList1.appendChild(todoItem);
    }
  });
});
function deleteTodo1(todoItemId) {
  const todoItem = document.getElementById(todoItemId);
  const todoItemsContainer = todoItem.parentNode;
  todoItemsContainer.removeChild(todoItem);
  clickCount1--;
}

// การฝึกอบรม
let clickCount3 = 0;
document.addEventListener('DOMContentLoaded', function () {
  const btn_from1 = document.getElementById('btn_from1');
  const todoList1 = document.getElementById('todo-list');
  const todoItems1 = [];

  btn_from1.addEventListener('click', function (event) {
    event.preventDefault();

    if (clickCount3 < 3) {
      const todoItem3 = document.createElement('div');
      const todoItemId = `XD-${clickCount3 + 1}`;
      clickCount3++;
      todoItem3.id = todoItemId;
      const html = `
          <div class="row pt-4 px-4" id="XD-${todoItemId}">
            <h6 class="col-12 d-flex justify-content-center">TRAINING, OTHER</h6>
            <div class="col-12 d-flex justify-content-end mb-4">
            <button class="btn btn-outline-medeze col-auto" onclick="deleteXD('${todoItemId}')">Delete</button>
            </div>
          </div>
          <div class="row p-4 border-bottom">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <label>สถาบัน/บริษัท</label>
              <h6>INSTITUTE/COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="XD1${todoItemId}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <label>รายละเอียด</label>
              <h6>DESCRIPTION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="" aria-label="Username" id="XD2${todoItemId}" value="" aria-describedby="addon-wrapping" onkeydown="preventEnter(event)">
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <label>ระยะเวลาการฝึกอบรม</label>
              <h6>DURATION OF COURSE</h6>
              <div class="input-group flex-nowrap">
              <input type="date" name="birthdaytime" class="form-control"
              id="XD3${todoItemId}" onkeydown="preventEnter(event)">
              </div>
            </div>
          </div>`;

      todoItem3.innerHTML = html;
      todoItems1.push(todoItemId);
      todoList1.appendChild(todoItem3);
    }
  });
});
function deleteXD(todoItemId) {
  const todoItem3 = document.getElementById(todoItemId);
  const todoItemsContainer = todoItem3.parentNode;
  todoItemsContainer.removeChild(todoItem3);
  clickCount3--;
}

function test(clickCount1) {
  console.log(clickCount1);
}