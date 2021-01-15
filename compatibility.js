/**
 * scroll compatibility func
 */
function getScrolloffset(){
    if(window.pageXOffset){
        return{
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }else{
        return{
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
/**
 * it's compatibility func to get viewport size
 */
function getViewportOffset(){
    return {
        width: window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
        height: window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
    }
}
/**
 * it's cancelBubble compatibility func
*/
function stopBubble(event){
    var e = event||window.event
    if(e.stopProgation())
    e.stopProgation();
    else
    e.cancelBubble = true
}
/**
 * it's preventDefault compatibility func
 */
function cancelHandle(event){
    var e = event||window.event
    if(e.preventDefault())
    e.preventDefault();
    else
    e.returnValue = false/*ie*/
}