import axiosmain from "./axiosmain";




export const apiJobList = async (currentPage, keyword) => {
    const { data } = await axiosmain.get(`/cong-viec/phan-trang-tim-kiem`, {
        params: {
            pageIndex: currentPage,
            pageSize: 8,
            keyword: keyword,
        },
    });
    return data?.content;
};


// export const apiJobList = async (keyword) => {
//     const { data } = await axiosmain.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`, {
//         params: {

//             keyword: keyword,
//         },
//     });
//     return data?.content;
// };


export const apiJobMenu = async () => {
    const { data } = await axiosmain.get(`/cong-viec/lay-menu-loai-cong-viec`);
    return data;
};

export const apiJobCategoryDetail = async (MaLoaiCongViec) => {
    const { data } = await axiosmain.get(
        `/cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`
    );
    return data;
};