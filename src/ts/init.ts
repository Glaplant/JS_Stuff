init();

function init(){

    domGrid();
    domList();
}

function domGrid(){
    const main = document.querySelector('main');
    const container = document.createElement('div');
    const columnLeft = document.createElement('div');
    const columnRight = document.createElement('div');
    container.classList.add("container");
    columnLeft.classList.add("col-left");
    columnLeft.setAttribute("id","col-left");
    columnRight.classList.add("col-right");
    columnRight.setAttribute("id","col-right");
    container.appendChild(columnLeft);
    container.appendChild(columnRight);
    main.appendChild(container);
 
}




function domList(){
    const ul:HTMLElement = document.createElement("ul");
    const columnLeft:HTMLElement = document.getElementById("col-left");
    columnLeft.appendChild(ul);
    // console.log(columnLeft);
    const projects: string[] = [ "slider", "gallery", "modal", "animation","fetch"];
    projects.forEach( project => {
    const li:HTMLLIElement = document.createElement("li");
    const a: HTMLAnchorElement = document.createElement("a");
    a.textContent = project.toUpperCase();
    a.addEventListener("click", e => changeDom(e));
    li.setAttribute("id",project);
    li.classList.add("projects");
    li.appendChild(a);
    ul.appendChild(li);
    // console.log(ul,li);
    // console.log(project);
  
    }
        )

}


function changeDom(e: any){
    const p  = document.createElement("p");
    const eventOrigin = e.target.innerText;
    console.log(eventOrigin);
    p.textContent=eventOrigin;
    const rightColumn = document.getElementById("col-right");
    rightColumn.innerHTML = ""
    rightColumn.appendChild(p);


}