window.addEventListener('DOMContentLoaded', (event) => {
let numarray = [1002336, 1005555, 1011011, 1013264, 1013369, 1025171, 1025708, 1031041, 1051403, 1053509, 1054011, 1054062, 1061287, 1061694, 1064501, 1069248, 1086898, 1090507, 1092335, 1094362, 1096599, 1108809, 1109083, 1115477, 1120289, 1122706, 1132711, 1142363, 1144490, 1145925, 1148073, 1150457, 1154631, 1158376, 1159452, 116306, 1165203, 1167132, 1171789, 1182767, 1183720, 1184848, 1187129, 1188324, 1189710, 1190470, 1190710, 1193921, 1194330, 1194331, 119438, 1195197, 1196908, 1197595, 1197699, 1197928, 1198033, 1200218, 1205078, 1206019, 1207707, 1207988, 1211726, 1213101, 1218852, 1222043, 1224369, 122658, 1238759, 1243342, 1243487, 1244533, 1246152, 1246982, 1249938, 1251736, 1252827, 1264863, 1268030, 1269933, 1270237, 1272604, 1276213, 1279298, 1280798, 1282405, 1286203, 128931, 1291269, 1300115, 1308171, 1312076, 1313664, 1314891, 1322825, 132824, 1328989, 134151, 1341551, 1345462, 1346012, 1380176, 1384619, 1388112, 1388906, 1391155, 1391659, 140662, 1410511, 1423969, 1431207, 1439926, 1443200, 1447391, 1448237, 149144, 1494883, 1499705, 1503965, 1504457, 1505838, 150945, 1524663, 1530200, 153776, 1546616, 1546952, 155118, 1557323, 1575739, 158023, 1581431, 1589180, 1594355, 160201, 1605134, 163112, 1669877, 1670003, 1671498, 1671498, 1676680, 1680685, 1690910, 1699279, 1727804, 17380, 1738898, 1745789, 1749133, 1768214, 1787851, 1802635, 18260, 1846876, 185250, 186141, 186318, 1900700, 190222, 1936584, 1943077, 1973430, 19928, 206750, 209269, 219380, 219728, 221860, 223180, 228815, 232935, 235093, 24084, 27104, 280885, 28145, 282345, 285577, 292077, 292301, 29727, 302799, 306164, 314211, 316625, 320118, 323773, 325112, 325158, 325307, 326920, 335665, 345450, 347779, 357466, 360107, 370374, 371128, 3756, 375648, 384772, 387700, 391823, 396221, 39804, 398913, 399372, 40440, 405474, 410231, 413707, 41823, 426602, 427725, 429956, 437797, 440706, 441155, 452230, 456986, 459149, 461744, 462386, 472817, 47710, 481451, 483503, 484532, 497769, 50133, 503141, 503486, 50752, 513590, 518660, 522857, 530360, 530986, 534054, 536872, 538998, 546820, 547714, 558217, 559248, 571835, 57368, 586121, 586841, 594067, 594429, 596704, 597111, 604847, 611956, 613928, 6257, 632870, 636839, 637445, 639467, 643408, 651507, 651692, 653534, 65853, 661919, 665179, 666366, 667868, 670800, 67105, 671199, 682290, 68500, 685242, 688824, 692068, 696175, 6997, 705423, 716630, 71738, 721804, 726747, 736560, 737714, 745020, 753203, 754450, 757410, 758344, 762628, 765778, 770300, 779173, 781509, 783213, 785572, 785731, 789544, 80214, 806859, 807850, 813569, 819112, 829956, 838182, 847394, 848003, 850717, 859370, 859783, 865746, 867737, 869019, 870961, 873811, 879516, 881735, 881951, 885158, 888544, 891333, 891441, 891632, 893763, 896080, 906786, 912207, 914242, 919187, 925078, 926278, 926846, 934179, 935181, 941085, 942637, 954734, 962088, 966339, 967277, 971896, 974362, 976108, 979887, 983911, 984496, 996295, 996628, 999616];
//console.log(numarray);

let list = document.getElementById("client-list");
            list.innerHTML = ''
            // Re-fill Random List
            for (let i = 0; i < numarray.length; i++){
            let randquery = numarray[i];
            addBeatmapList("https://catboy.best/api/search?q=" + randquery + "&amount=1&mode=0", list);
        }  





















});
