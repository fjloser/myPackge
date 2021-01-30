/*
 * @Author: fangjie
 * @Date: 2021-01-14 15:41:05
 * @LastEditTime: 2021-01-30 14:11:32
 * @LastEditors: Please set LastEditors
 * @Description: to adapt all explores compatibility
 * @FilePath: \mytestc:\Users\Administrator\Desktop\github\myPackge\compatibility.js
 */
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
/**
 * @description: get the ele's all kinds of attribute , and it's compatibility
 * @param {*} obj
 * @param {*} attr
 * @return {*}
 */
function getStyle(obj, attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj, null)[attr]
    }else{
        return obj.currentStyle[attr]
    }
}