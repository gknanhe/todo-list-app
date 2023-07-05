
//for setting background color of category
let category = document.getElementsByClassName('category-title');
for (i of category) {
    let value = i.getAttribute("value");
    if (value === "Personal") {
        i.style.backgroundColor = "#c7b9fe";

    }
    if (value === "Family") {
        i.style.backgroundColor = "#b9fec7";
    }
    if (value === "Work") {
        i.style.backgroundColor = "#e3b9fe";
    }
    if (value === "Study") {
        i.style.backgroundColor = "#b9ecfe";
    }
    if (value === "Entertainment") {
        i.style.backgroundColor = "#b9fee6";
    }
}

//if task checked then mark as done
let checkList = document.querySelectorAll('.cBox');
for (let i = 0; i < checkList.length; i++) {
    let id = checkList[i].dataset.id;
    console.log(id);
    let cb = checkList[i];

    cb.addEventListener('click', (event) => {


        function ckeckBoxes() {

            console.log('event', event.target.checked, event.target.dataset.id)

            // event.target.checked = "";
            if (event.target.checked) {
                let dbid = event.target.dataset.dbid;

                //sending to server
                let checkbox_value = event.target.checked;
                $.ajax({

                    // /delete-task/?id=<%= i.id %> 
                    url: `/add-checked?check=${checkbox_value}&dbId=${dbid}`,
                    type: 'POST',
                    // data: {checked: "checked"},
                    success: function (response) {
                        // console.log(data,"data");
                        console.log("sent ");
                    }
                });


                let taskdis = document.getElementsByClassName('task');
                // console.log(taskdis);
                for (let i = 0; i < taskdis.length; i++) {
                    // let taskdis = document.querySelector(".task");
                    let taskid = taskdis[i].dataset.taskid;
                    console.log(taskid, 'taskid');
                    // console.log(event.target.dataset.id,"ckeckbxis",taskdis[i].dataset.id,"task id" )
                    if (event.target.dataset.id === taskid) {
                        taskdis[i].style.textDecoration = "line-through";
                        taskdis[i].style.color = "red";
                    }


                }
            }
            //if unchecked then make as it is
            else if (!event.target.checked) {
                console.log('unchecked')
                //if not checked update db
                let dbid = event.target.dataset.dbid;
                //sending to server
                let checkbox_value = event.target.checked;
                console.log(checkbox_value, "checkbox value")
                $.ajax({

                    // /delete-task/?id=<%= i.id %> 
                    url: `/add-checked?check=${checkbox_value}&dbId=${dbid}`,
                    type: 'POST',
                    // data: {checked: ""},
                    success: function (response) {
                        // console.log(data,"data");
                        console.log("sent ");
                    }
                });


                let taskdis = document.getElementsByClassName('task');
                // console.log(taskdis);
                for (let i = 0; i < taskdis.length; i++) {
                    let taskid = taskdis[i].dataset.taskid;
                    if (event.target.dataset.id === taskid) {
                        taskdis[i].style.textDecoration = "none";
                        taskdis[i].style.color = "currentColor";
                    }


                }
            }
        }

        ckeckBoxes();


    });

}



window.addEventListener("load", (event) => {

    console.log("inside onload");

    let inputCheckbox = document.querySelectorAll('.cBox')
    console.log(inputCheckbox);
    for (let i = 0; i < inputCheckbox.length; i++) {
        let isChecked = inputCheckbox[i].checked;
        taskNo = inputCheckbox[i];

        if (isChecked) {



            let taskdis = document.getElementsByClassName('task');
            console.log(taskdis, "inside onload");
            for (let i = 0; i < taskdis.length; i++) {
                // let taskdis = document.querySelector(".task");
                let taskid = taskdis[i].dataset.taskid;
                console.log(taskid, 'taskid');
                // console.log(event.target.dataset.id,"ckeckbxis",taskdis[i].dataset.id,"task id" )
                if (taskNo.dataset.id === taskid) {
                    taskdis[i].style.textDecoration = "line-through";
                    taskdis[i].style.color = "red";
                }


            }
        }
        else{

            let taskdis = document.getElementsByClassName('task');
            console.log(taskdis, "inside onload");
            for (let i = 0; i < taskdis.length; i++) {
                // let taskdis = document.querySelector(".task");
                let taskid = taskdis[i].dataset.taskid;
                console.log(taskid, 'taskid');
                // console.log(event.target.dataset.id,"ckeckbxis",taskdis[i].dataset.id,"task id" )
                if (taskNo.dataset.id === taskid) {
                    taskdis[i].style.textDecoration = "none";
                    taskdis[i].style.color = "currentColor";
                }


            }
        }
    }

});
