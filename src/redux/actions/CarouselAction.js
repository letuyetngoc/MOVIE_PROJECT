import axios from "axios";
import { quanLiPhimService } from "../../services/QuanLiPhimService";
import { DOMAIN, TOKEN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../types/carouselTypes";

export const getCarouselAction = async (dispatch) => {
    try {
        const result = await quanLiPhimService.layDanhSachBanner;
        dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content
        })

    } catch (errors) {
        console.log('errors', errors)
    }
}