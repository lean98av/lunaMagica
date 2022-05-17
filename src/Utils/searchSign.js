const searchSign = (month, day) => {
    let sign = [];
    if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) sign = [0, "aries"];
    if ((day >= 24 && month === 9) || (day <= 23 && month === 10)) sign = [6, "leo"];
    if ((day >= 21 && month === 4) || (day <= 21 && month === 5)) sign = [1, "taurus"];
    if ((day >= 24 && month === 10) || (day <= 22 && month === 11)) sign = [7, "virgo"];
    if ((day >= 22 && month === 5) || (day <= 21 && month === 6)) sign = [2, "gemini"];
    if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) sign = [8, "libra"];
    if ((day >= 21 && month === 6) || (day <= 23 && month === 7)) sign = [3, "cancer"];
    if ((day >= 22 && month === 12) || (day <= 20 && month === 1)) sign = [9, "scorpio"];
    if ((day >= 24 && month === 7) || (day <= 23 && month === 8)) sign = [4, "sagittarius"];
    if ((day >= 21 && month === 1) || (day <= 19 && month === 2)) sign = [10, "capricorn"];
    if ((day >= 24 && month === 8) || (day <= 23 && month === 9)) sign = [5, "aquarius"];
    if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) sign = [11, "pisces"];
    return sign;
  };
export default searchSign; 