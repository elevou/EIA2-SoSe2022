namespace EventInspector {
    window.addEventListener("load", handleLoad); 
    
    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        let div0: HTMLElement = document.querySelector("#div0");
        let div1: HTMLElement = document.querySelector("#div1");

        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let xPosition: number = _event.clientX;
        let yPosition: number = _event.clientY;

        let spanInfo: HTMLSpanElement = document.querySelector("#span");
        spanInfo.style.left = (xPosition + 10) + "px";
        spanInfo.style.top = (yPosition + 10) + "px";
        spanInfo.innerHTML = "X: " + xPosition + "<br>" + "Y: " + yPosition + "<br>" + _event.target;
    }

    function logInfo(_event: Event): void {
        console.log("Type: ", _event.type);
        console.log("Target: ", _event.target);
        console.log("Current target: ", _event.currentTarget);
        console.log("Event-Object: ", _event);
    }
}