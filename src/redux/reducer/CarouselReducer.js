const stateDefault = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
}
const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_CAROUSEL': {
            state.arrImg = action.arrImg
            console.log(state)
            return { ...state }
        }
        default: return { ...state }
    }
}
export default CarouselReducer