import { BaseService } from "./BaseService"

export class QuanLiPhimService extends BaseService {
    constructor() {
        super()
    }
    layDanhSachBanner = () => {
        this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
}
export const quanLiPhimService = new QuanLiPhimService()