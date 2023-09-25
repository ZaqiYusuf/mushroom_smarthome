import UserData from "../data/page";

const config = {
    ...UserData,
    type: 'line',
    data: UserData,
    options: {
        responsive: true,
        scales : {
            y: {
                ticks: {
                    callback: function (value) {
                        return "$" + value ;
                    }
                }
            }
        }
    },
}

export default config;