class DimensionHelper {

    getChildWidth(element) {
        const style = element.firstElementChild.currentStyle || window.getComputedStyle(element.firstElementChild);
        const width = element.firstElementChild.offsetWidth; 
        const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        return (width + margin);
    }



}

export default new DimensionHelper();