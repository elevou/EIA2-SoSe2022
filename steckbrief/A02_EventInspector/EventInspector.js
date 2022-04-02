var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div0 = document.querySelector("#div0");
        let div1 = document.querySelector("#div1");
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let xPosition = _event.clientX;
        let yPosition = _event.clientY;
        let spanInfo = document.querySelector("#span");
        spanInfo.style.left = (xPosition + 10) + "px";
        spanInfo.style.top = (yPosition + 10) + "px";
        spanInfo.innerHTML = "X: " + xPosition + "<br>" + "Y: " + yPosition + "<br>" + _event.target;
    }
    function logInfo(_event) {
        console.log("Type: ", _event.type);
        console.log("Target: ", _event.target);
        console.log("Current target: ", _event.currentTarget);
        console.log("Event-Object: ", _event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map