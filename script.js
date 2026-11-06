'use strict';

/* =========================================================================
   BANDERSNATCH — motor de decisiones
   Datos del grafo adaptados de:
     · CyberShadow/BandersnatchInteractive  (assets/SegmentMap.js, assets/bandersnatch.js)
     · joric/bandersnatch                   (trabajo original)
   Los datos de segmentos/momentos provienen del JSON de Netflix.
   ========================================================================= */

const VIDEO_SRC = 'bandersnatch.mp4';
const SUBS_SRC  = 'es-419.vtt';

/* ---------- SEGMENTOS: id -> [inicioMs, finMs, defaultNext] ---------- */
const SEGMENTS = {
"1A":[0,153520,"1E"],
"1E":[153520,207240,"1H"],
"1H":[207240,481360,"8A"],
"8A":[481360,571320,"1HA"],
"1HA":[571320,711240,"1Qtt"],
"1Qtt":[711240,1028600,"2B"],
"2B":[1028600,1225200,"1R"],
"1R":[1225200,1415040,"3B"],
"3B":[1415040,1425320,"SS13"],
"SS13":[1425320,1456960,"3Ax"],
"3Ax":[1456960,1486960,"3C"],
"3C":[1486960,1509080,"3J"],
"3J":[1509080,1577120,"3R"],
"3R":[1577120,1645800,"3U"],
"3U":[1645800,1698160,"3X"],
"3X":[1698160,1738880,"8B"],
"8B":[1738880,1803000,"SS15"],
"SS15":[1803000,1834640,"3Xxa"],
"3Xxa":[1834640,1864640,"3Vfs"],
"3Vfs":[1864640,2109600,"3Y"],
"3Y":[2109600,2129120,"SS17"],
"SS17":[2129120,2160760,"3Vx"],
"3Vx":[2160760,2193720,"3Z"],
"3Z":[2193720,2247960,"3AH"],
"3AH":[2247960,2401400,"4C2"],
"4C2":[2401400,2444600,"7A"],
"7A":[2444600,2474800,"7B"],
"7B":[2474800,2499440,"7C"],
"7C":[2499440,2513520,"7D"],
"7D":[2513520,2659280,"7L"],
"7L":[2659280,2719040,"SS51"],
"SS51":[2719040,2750640,"R4"],
"R4":[2750640,2776800,"3M"],
"3M":[2776800,2983840,"3N"],
"3N":[2983840,3253520,"8L"],
"8L":[3253520,3327800,"SS20"],
"SS20":[3327800,3359440,"3Nx"],
"3Nx":[3359440,3390680,"3Q"],
"3Q":[3390680,3449200,"3S"],
"3S":[3449200,3468360,"ZHw6"],
"ZHw6":[3468360,3551360,"3AC2"],
"3AC2":[3551360,3632880,"5A"],
"5A":[3632880,3684720,"5H"],
"5H":[3684720,3702080,"5V"],
"5V":[3702080,3747640,"5QA"],
"5QA":[3747640,3795400,"5UA"],
"5UA":[3795400,3831280,"5AD"],
"5AD":[3831280,3903920,"5AF"],
"5AF":[3903920,3982440,"8Q"],
"8Q":[3982440,4084840,"SS52"],
"SS52":[4084840,4116440,"Z7c"],
"Z7c":[4116440,4155360,"5VA"],
"5VA":[4155360,4182080,"5Mp"],
"5Mp":[4182080,4339880,"8K"],
"8K":[4339880,4465720,"S37A"],
"S37A":[4465720,4525960,"R2"],
"R2":[4525960,4559640,"3AD3"],
"3AD3":[4559640,4678120,"8J"],
"8J":[4678120,4791120,"8JA"],
"8JA":[4791120,4869520,"SS57"],
"SS57":[4869520,4901120,"R6"],
"R6":[4901120,4949480,"3AF1"],
"3AF1":[4949480,5179360,"6A"],
"6A":[5179360,5309200,"6D"],
"6C":[5309200,5397160,"8D"],
"8D":[5397160,5442480,"0cr3"],
"1D":[5442480,5496880,"1H"],
"1G":[5496880,5773000,"8A"],
"1GA":[5773000,5913600,"1Qnw"],
"1Qnw":[5913600,6230960,"2B"],
"3Xcd":[6230960,6271680,"3Wff"],
"3Wff":[6271680,6544400,"3Y"],
"3AB":[6544400,6699080,"4C2"],
"7H":[6699080,6732000,"7K"],
"7K":[6732000,6747400,"SS56"],
"SS56":[6747400,6779000,"0cr2"],
"8Aa":[6779000,6799680,"SS10"],
"SS10":[6799680,6831280,"1PA"],
"1PA":[6831280,6869400,"1Qnw"],
"1QA":[6869400,6906800,"3C"],
"1GB":[6906800,7023400,"1Qnw"],
"1QB":[7023400,7045920,"3J"],
"3L":[7045920,7072480,"3M"],
"ZP":[7072480,7104240,"3Z"],
"ZJ":[7104240,7138480,"3AD"],
"3AD":[7138480,7256960,"3AK"],
"3AK":[7256960,7310880,"4C2"],
"4C1":[7310880,7354080,"6A"],
"ZMC":[7354080,7370200,"6B"],
"6B":[7370200,7432720,"6D"],
"6D":[7432720,7505400,"8D"],
"8Da":[7505400,7550720,"SS50"],
"2Bt1":[7550720,7725080,"3C"],
"2Bp2":[7725080,7894920,"3L"],
"2GA":[7894920,7926000,"2B"],
"2Bp1":[7926000,8100360,"3C"],
"2Bt2":[8100360,8270200,"3L"],
"3LA":[8270200,8280160,"3S"],
"3Vff":[8280160,8525120,"3Y"],
"3Vbf":[8525120,8767400,"3Y"],
"3Vbs":[8767400,9009680,"3Y"],
"3Wbf":[9009680,9279200,"3Y"],
"3Wbs":[9279200,9548720,"3Y"],
"3Wfs":[9548720,9821440,"3Y"],
"3AC":[9821440,9908480,"4C2"],
"ZK1":[9908480,9944600,"8J"],
"3AL":[9944600,9999840,"4C2"],
"ZK2":[9999840,10035960,"3AL"],
"3AD1":[10035960,10154440,"8J"],
"3AC1":[10154440,10235960,"6A"],
"3AB1":[10235960,10385120,"6A"],
"3AB2":[10385120,10534280,"7A"],
"3AJ1":[10534280,10636080,"6A"],
"3AJ2":[10636080,10737880,"7A"],
"3AH2":[10737880,10885800,"7A"],
"ZMB":[10885800,10908120,"5VA"],
"3VB":[10908120,10987040,"3AD"],
"3AJ":[10987040,11094360,"4C2"],
"4D1":[11094360,11136560,"6A"],
"3AH1":[11136560,11284480,"6A"],
"ZK":[11284480,11320600,"3AK"],
"3AK2":[11320600,11369000,"7A"],
"ZH":[11369000,11434160,"3Z"],
"2Gp1":[11434160,11482920,"3C"],
"2Gt1":[11482920,11531680,"3C"],
"2Gp2":[11531680,11575920,"3L"],
"2Gt2":[11575920,11620160,"3L"],
"2G":[11620160,11691600,"1R"],
"1S":[11691600,11879880,"3C"],
"3AL1":[11879880,11929600,"6A"],
"3AK1":[11929600,11978000,"6A"],
"3AF2":[11978000,12207880,"7A"],
"3AL2":[12207880,12257600,"7A"],
"4D2":[12257600,12299800,"5A"],
"3AF":[12299800,12535200,"4C2"],
"3Xac":[12535200,12569840,"3Vbs"],
"3VA":[12569840,12638520,"3Z"],
"3Xa":[12638520,12669040,"3Vbs"],
"ZQ":[12669040,12723240,"3AD"],
"3AD2":[12723240,12841720,"3AL"],
"ZG":[12841720,12898280,"8L"],
"1HB":[12898280,13014200,"1Qnw"],
"8JB1":[13014200,13046160,"6A"],
"8JB2":[13046160,13078120,"7A"],
"5Mpc":[13078120,13225360,"8K"],
"5Mtc":[13225360,13372600,"8K"],
"5Mt":[13372600,13529760,"8K"],
"5Q":[13529760,13579720,"5U"],
"5U":[13579720,13609320,"5AD"],
"5R":[13609320,13647320,"5AD"],
"5RA":[13647320,13691600,"5AD"],
"5S":[13691600,13719280,"5AD"],
"5SA":[13719280,13760360,"5AD"],
"5TA":[13760360,13801520,"5AD"],
"5AG2":[13801520,13880680,"5AH"],
"5AH":[13880680,13928480,"8M"],
"8M":[13928480,14030840,"SS53"],
"5AC":[14030840,14123240,"8V"],
"8V":[14123240,14217320,"SS53"],
"5AC2":[14217320,14267760,"8V"],
"8Va":[14267760,14361840,"SS53"],
"R2cd":[14361840,14410800,"3AD"],
"ZK3":[14410800,14446920,"8J"],
"5AD2":[14446920,14489560,"5AF"],
"5AE":[14489560,14593960,"8Q"],
"8Qa":[14593960,14696360,"SS53"],
"5AG":[14696360,14805520,"5AH"],
"5AJ":[14805520,14862000,"8S"],
"8S":[14862000,14947800,"SS53"],
"8Sa":[14947800,15033600,"SS53"],
"3P":[15033600,15308000,"8L"],
"8Ma":[15308000,15410360,"SS53"],
"7J":[15410360,15427080,"SS50"],
"3T":[15427080,15480040,"3X"],
"5G":[15480040,15497360,"SS1"],
"5T":[15497360,15538120,"5AD"],
"ZB":[15538120,15584480,"2B"],
"Z1":[15584480,15632840,"3C"],
"Z2":[15632840,15658680,"3J"],
"Z3":[15658680,15685000,"3X"],
"Z3cd":[15685000,15715120,"3X"],
"Z4":[15715120,15752760,"3Y"],
"Z4cd":[15752760,15799800,"3Y"],
"ZD":[15799800,15858920,"3AD"],
"ZE":[15858920,15920040,"3AD"],
"SS1":[15920040,15951680,"R3"],
"SS2":[15951680,15983280,"R1"],
"R1":[15983280,16016160,"3AJ"],
"SS3":[16016160,16047760,"R2"],
"SS4":[16047760,16079360,"R4"],
"SS5":[16079360,16110960,"Z62b"],
"SS6":[16110960,16142560,"R3"],
"R3":[16142560,16172720,"2B"],
"SS7":[16172720,16204320,"5H"],
"SS8":[16204320,16235920,"5H"],
"SS9":[16235920,16267520,"5H"],
"SS11":[16267520,16299160,"3Ax"],
"SS12":[16299160,16330840,"3Ax"],
"SS14":[16330840,16362480,"3Xxa"],
"3Xxc":[16362480,16393320,"3Vbs"],
"SS16":[16393320,16424960,"3Vx"],
"SS18":[16424960,16456600,"3Vx"],
"SS19":[16456600,16488240,"3Nx"],
"R5":[16488240,16522800,"3R"],
"SS21":[16522800,16554400,"5H"],
"SS22":[16554400,16586000,"5H"],
"SS50":[16586000,16617600,"0cr2"],
"R3cd":[16617600,16659200,"2B"],
"R4cd":[16659200,16697400,"3M"],
"SS53":[16697400,16729000,"0cr2"],
"SS54":[16729000,16760600,"0cr2"],
"SS55":[16760600,16792200,"0cr2"],
"R1cd":[16792200,16839200,"3AJ"],
"S44B":[16839200,16899760,"0cr1"],
"S34B":[16899760,16960360,"0cr1"],
"S35B":[16960360,17020920,"0cr1"],
"S59B":[17020920,17081480,"0cr1"],
"S36B":[17081480,17142040,"0cr1"],
"S37B":[17142040,17202600,"0cr1"],
"S38B":[17202600,17263160,"0cr1"],
"S38A":[17263160,17323400,"0cr1"],
"S44A":[17323400,17383640,"0cr1"],
"S34A":[17383640,17443880,"0cr1"],
"S59A":[17443880,17504120,"0cr1"],
"S35A":[17504120,17564360,"0cr1"],
"S36A":[17564360,17624600,"0cr1"],
"Z62a":[17624600,17670000,"7A"],
"Z62b":[17670000,17711600,"7A"],
"Z62c":[17711600,17768520,"7A"],
"Z62d":[17768520,17820320,"7A"],
"Z62e":[17820320,17868840,"7A"],
"Z62f":[17868840,17913600,"7A"],
"Z61a":[17913600,17959000,"6A"],
"Z61b":[17959000,18000600,"6A"],
"Z61c":[18000600,18057520,"6A"],
"Z61d":[18057520,18109320,"6A"],
"Z61e":[18109320,18157840,"6A"],
"Z61f":[18157840,18202600,"6A"],
"Z7a":[18202600,18229000,"5V"],
"Z7b":[18229000,18252000,"5V"],
"Z7d":[18252000,18288600,"5V"],
"Z7e":[18288600,18320240,"5V"],
"Z7f":[18320240,18348240,"5V"],
"8KB":[18348240,18353800,"0Cr4"],
"8KA":[18353800,18359040,"0Cr4"],
"0cr3":[18359040,18515280,"IDNT"],
"0Cr4":[18515280,18595160,"IDNT"],
"0cr1":[18595160,18646200,"IDNT"],
"0cr2":[18646200,18724240,"IDNT"],
"IDNT":[18724240,null,""]
};

/* ---------- GRUPOS (resolución con precondiciones, orden = prioridad) ---------- */
const GROUPS = {
"nsg-8AChoice":["8A","8Aa"],
"nsg-1Qnw-1Qtt":["1Qtt","1Qnw"],
"nsg-1Q_rewatch":["1QB",{"segment":"1Qtt"},{"segment":"1Qnw"},"1QA"],
"nsg-1QB":[{"segment":"ZJ"},{"segment":"3L"},"3J"],
"nsg-2BChoice":["2B","2Bp1","2Bp2","2Bt1","2Bt2"],
"nsg-R3cd":[{"segmentGroup":"nsg-2BChoice"}],
"nsg-R3":[{"segmentGroup":"nsg-2BChoice"}],
"nsg-2GChoice":["2G","2Gp1","2Gp2","2Gt1","2Gt2"],
"nsg-FlushThemChoice3X":["3Vff","3Vfs","3Wff","3Wfs","ZHw6","3VB","ZH","3VA"],
"nsg-FlushThemChoice":["3Vff","3Vbf","3Vfs","3Vbs","3Wff","3Wbf","3Wfs","3Wbs","ZHw6","3VB","ZH","3VA"],
"nsg-ThrowThemChoice":["3Vbf","3Vbs","3Wbf","3Wbs","ZHw6","3VB","ZH","3VA"],
"nsg-VisitHaynesChoice":["ZP","ZQ","3Xa","3Xac","3S","3R"],
"nsg-FollowColinChoice":["ZG","3M"],
"nsg-3LA":[{"segmentGroup":"nsg-VisitHaynesChoice"}],
"nsg-WhoThereChoice":["Z61e","Z61a","Z61f","Z61b","Z62e","Z62a","Z62f","Z62b"],
"nsg-WhoThereChoice-SS54":["Z61a","Z61b","Z61c","Z61d","Z62a","Z62b","Z62c","Z62d",{"segmentGroup":"nsg-WhoThereChoice"}],
"nsg-SS55-0":["R1cd","R1"],
"nsg-FamilyPhotoChoice":["3AB","3AB1","3AB2","3AC","3AC1","3AC2","3AJ","3AJ1","3AJ2","3AH","3AH1","3AH2"],
"nsg-FamilyPhotoChoice_R1":["3AB","3AB1","3AB2","3AC","3AC1","3AC2","3AJ","3AJ1","3AJ2","3AH","3AH1","3AH2"],
"nsg-R1":[{"segmentGroup":"nsg-FamilyPhotoChoice_R1"}],
"nsg-R1cd":[{"segmentGroup":"nsg-FamilyPhotoChoice_R1"}],
"nsg-BookChoice":["ZK3","ZK1","ZK2","ZK","3AD3","3AD1","3AD2","3AD"],
"nsg-R2":[{"segmentGroup":"nsg-BookChoice"}],
"nsg-R2cd":[{"segmentGroup":"nsg-BookChoice"}],
"nsg-3B":[{"segmentGroup":"nsg-splitScreens"}],
"nsg-8B":[{"segmentGroup":"nsg-splitScreens"}],
"nsg-3C":["ZJ","3J","3L","3LA"],
"nsg-3Q":["3S","3R"],
"nsg-3S":["3X","3Xcd","3Vff","3Vbf","3Vfs","3Vbs","3Wff","3Wbf","3Wfs","3Wbs","ZHw6","3VB","ZH","3VA"],
"nsg-3U":["3X","3Xcd"],
"nsg-3T":["3X","3Xcd"],
"nsg-3Y":[{"segmentGroup":"nsg-splitScreens"}],
"nsg-8L":[{"segmentGroup":"nsg-splitScreens"}],
"nsg-6C":["8D","8Da"],
"nsg-6D":["8D","8Da"],
"nsg-8JA":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8D":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8Da":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-5AH":["8M","8Ma"],
"nsg-5AE":["8Q","8Qa"],
"nsg-5AF":["8Q","8Qa"],
"nsg-5AC":["8V","8Va"],
"nsg-5AC2":["8V","8Va"],
"nsg-5AJ":["8S","8Sa"],
"nsg-8KA":[{"segment":"0Cr4"},{"segment":"0cr3"}],
"nsg-8KB":[{"segment":"0Cr4"},{"segment":"0cr3"}],
"nsg-8M":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8Ma":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8Q":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8Qa":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8V":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8Va":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8S":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-8Sa":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-2B2G_p2t2":["3L","3LA"],
"nsg-2Bp2":[{"segmentGroup":"nsg-2B2G_p2t2"}],
"nsg-2Bt2":[{"segmentGroup":"nsg-2B2G_p2t2"}],
"nsg-2Gp2":[{"segmentGroup":"nsg-2B2G_p2t2"}],
"nsg-2Gt2":[{"segmentGroup":"nsg-2B2G_p2t2"}],
"nsg-Z2":[{"segment":"3VA"},{"segment":"ZH"},{"segment":"ZJ"},{"segment":"3J"},{"segment":"3L"},{"segment":"3LA"}],
"nsg-8A":[{"segmentGroup":"nsg-respawnOptions"}],
"nsg-LettersPACSChoice":["ZMC","6A"],
"nsg-WhiteBearChoice":["ZMB","5A"],
"nsg-ThrowTeaChoice":["4C2","4C1"],
"nsg-DestroyComputerChoice":["4D2","4D1"],
"nsg-8J-1":["8JB2","8JB1"],
"nsg-R5":[{"segmentGroup":"nsg-VisitHaynesChoice"}],
"nsg-PACStudyChoice":["3AF","3AF1","3AF2"],
"nsg-R6":[{"segmentGroup":"nsg-PACStudyChoice"}],
"nsg-PAXChoice":["3AL","3AL1","3AL2"],
"nsg-JFDChoice":["3AK","3AK1","3AK2"],
"nsg-3Xxa_3Xxc":["3Xxa","3Xxc"],
"nsg-5V_5VA":["5V","5VA"],
"nsg-5H":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-Z7a":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-Z7b":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-Z7c":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-Z7d":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-Z7e":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-Z7f":[{"segmentGroup":"nsg-5V_5VA"}],
"nsg-bodyBurial_kitty":["5AD2","5AD"],
"nsg-bodyBurial_colin":["5AG","5AG2"],
"nsg-bodyBurial_tucker":["5AC","5AC2"],
"nsg-5T":[{"segmentGroup":"nsg-bodyBurial_tucker"}],
"nsg-5TA":[{"segmentGroup":"nsg-bodyBurial_kitty"}],
"nsg-5U":[{"segmentGroup":"nsg-bodyBurial_colin"}],
"nsg-5UA":[{"segmentGroup":"nsg-bodyBurial_kitty"}],
"nsg-5R":[{"segmentGroup":"nsg-bodyBurial_colin"}],
"nsg-5RA":[{"segmentGroup":"nsg-bodyBurial_kitty"}],
"nsg-5S":[{"segmentGroup":"nsg-bodyBurial_tucker"}],
"nsg-5SA":[{"segmentGroup":"nsg-bodyBurial_kitty"}],
"nsg-chopBuryRecap":["Z7a","Z7b","Z7e","Z7f","Z7c","Z7d"],
"nsg-5V-0":["5SA","5S","5RA","5R","5QA","5Q"],
"nsg-5V-1":["5Mpc","5Mtc","5Mt","5Mp"],
"nsg-SS11-0":["1GB","1GA","1HA","1HB"],
"nsg-SS50-0":["R3cd","R3"],
"nsg-SS51-0":["R4cd","R4"],
"nsg-SS56-0":["R2cd","R2"],
/* reconstruidos por inferencia (no venían en el extracto del JSON) */
"nsg-SS14-1":["3Xxa"],
"nsg-SS15-1":["3Xxa"],
"nsg-SS52-0":["5V"],
"nsg-SS53-0":["5V"],
"nsg-S59A-0":["5V"],
"nsg-S59B-0":["5V"],
"nsg-8K-0":["8KA"],
"nsg-8K-1":["8KB"],
"nsg-respawnOptions":["1GA","1GB","1HA","1HB","ZB","Z1","Z2","Z3cd","Z3","Z4cd","Z4","ZE","ZD"],
"nsg-Z3_all":["3X","3Xcd","3Vff","3Vbf","3Vfs","3Vbs","3Wff","3Wbf","3Wfs","3Wbs","ZHw6","3VB","ZH","3VA"],
"nsg-Z3":[{"segmentGroup":"nsg-Z3_all"}],
"nsg-Z3cd":[{"segmentGroup":"nsg-Z3_all"}],
"nsg-5G":[{"segmentGroup":"nsg-splitScreens"}],
"nsg-pearlThrowTea":["8KA","S59A","S44A","S34A","S35A","S36A","S37A","S38A",{"segment":"0Cr4"},{"segment":"0cr3"}],
"nsg-pearlDestroyComputer":["8KB","S59B","S44B","S34B","S35B","S36B","S37B","S38B",{"segment":"0Cr4"},{"segment":"0cr3"}],
"nsg-splitScreens":["SS12","SS11","SS13","SS14","SS15","SS16","SS17","SS18","SS19","SS20","SS1","SS6","SS2","SS7","SS3","SS8","SS9","SS4","SS22","SS21","SS5",{"segmentGroup":"nsg-respawnOptions"}],
"nsg-endingSplitScreens":["SS53","SS52","SS50","SS51","SS54","SS55","SS56","SS57","0Cr4","0cr3"],
"nsg-seenAllEndingsFrom7":[{"segment":"0Cr4"},{"segment":"0cr3"},{"segmentGroup":"nsg-endingSplitScreens"}],
"nsg-7J":[{"segmentGroup":"nsg-seenAllEndingsFrom7"}],
"nsg-7K":[{"segmentGroup":"nsg-seenAllEndingsFrom7"}],
"nsg-7L":[{"segmentGroup":"nsg-seenAllEndingsFrom7"}]
};

/* ---------- MOMENTOS: id -> [ [inicioMs, finMs, idxPorDefecto, [[texto, destino], …] ] ] ---------- */
const MOMENTS = {
"1A":[[135880,153520,0,[["SUGAR PUFFS","1E"],["FROSTIES","1D"]]]],
"1E":[[190640,207240,0,[["THOMPSON TWINS","1H"],["NOW 2","1G"]]]],
"1H":[[464720,481360,0,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Qnw-1Qtt"]]]],
"1D":[[5480280,5496880,0,[["THOMPSON TWINS","1H"],["NOW 2","1G"]]]],
"1G":[[5756400,5773000,0,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Qnw-1Qtt"]]]],
"1GA":[[5897000,5913600,1,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Q_rewatch"]]]],
"1GB":[[7006800,7023400,1,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Q_rewatch"]]]],
"1HA":[[694640,711240,1,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Q_rewatch"]]]],
"1HB":[[12997600,13014200,1,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Q_rewatch"]]]],
"1PA":[[6852800,6869400,1,[["ACEPTAR","nsg-8AChoice"],["RECHAZAR","nsg-1Q_rewatch"]]]],
"1QA":[[6890200,6906800,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"1QB":[[7023400,7045920,0,[["VISITAR AL DR. HAYNES","nsg-VisitHaynesChoice"],["SEGUIR A COLIN","nsg-FollowColinChoice"]]]],
"1Qnw":[[6214320,6230960,0,[["SÍ","nsg-2BChoice"],["NO","2GA"]]]],
"1Qtt":[[1011960,1028600,0,[["SÍ","nsg-2BChoice"],["NO","2GA"]]]],
"1R":[[1398440,1415040,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"1S":[[11863280,11879880,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"2B":[[1208600,1225200,0,[["PHAEDRA","1R"],["EL TRIÁNGULO DE LAS BERMUDAS","1S"]]]],
"2Bp1":[[8083760,8100360,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"2Bt1":[[7708480,7725080,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"2G":[[11675000,11691600,0,[["PHAEDRA","1R"],["EL TRIÁNGULO DE LAS BERMUDAS","1S"]]]],
"2GA":[[7909400,7926000,0,[["SÍ","nsg-2BChoice"],["NO","nsg-2GChoice"]]]],
"2Gp1":[[11466320,11482920,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"2Gt1":[[11515080,11531680,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"3AD":[["JFD","nsg-JFDChoice"],["PAX","nsg-PAXChoice"]] && [[7240360,7256960,0,[["JFD","nsg-JFDChoice"],["PAX","nsg-PAXChoice"]]]],
"3AD1":[[10137840,10154440,0,[["TOY","8J"],["PAX","nsg-PAXChoice"]]]],
"3AD2":[[12825120,12841720,0,[["PAX","nsg-PAXChoice"],["PAC","nsg-PACStudyChoice"]]]],
"3AD3":[[4661520,4678120,0,[["TOY","8J"],["PAC","nsg-PACStudyChoice"]]]],
"3AB":[[6682480,6699080,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AB1":[[10368520,10385120,1,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AB2":[[10517680,10534280,1,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AC":[[9891880,9908480,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AC1":[[10219320,10235960,1,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AC2":[[3616240,3632880,1,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AF":[[12518560,12535200,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AF1":[[5162760,5179360,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AF2":[[12191280,12207880,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AH":[[2384800,2401400,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AH1":[[11267880,11284480,1,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AH2":[[10869200,10885800,1,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AJ":[[11077760,11094360,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AJ1":[[10619480,10636080,1,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AJ2":[[10721280,10737880,1,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AK":[[7294280,7310880,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AK1":[[11961400,11978000,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AK2":[[11352400,11369000,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AL":[[9983200,9999840,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-ThrowTeaChoice"],["DESTRUIR EL ORDENADOR","nsg-DestroyComputerChoice"]]]],
"3AL1":[[11913000,11929600,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3AL2":[[12241000,12257600,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"3Ax":[[1470320,1486960,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"3J":[[1560480,1577120,0,[["VISITAR AL DR. HAYNES","nsg-VisitHaynesChoice"],["SEGUIR A COLIN","nsg-FollowColinChoice"]]]],
"3L":[[7055880,7072480,0,[["VISITAR AL DR. HAYNES","nsg-VisitHaynesChoice"],["SEGUIR A COLIN","nsg-FollowColinChoice"]]]],
"3M":[[2967240,2983840,0,[["SÍ","3N"],["NO","3P"]]]],
"3N":[[3232880,3253520,0,[["STEFAN","8L"],["COLIN","3Q"]]]],
"3Nx":[[3370040,3390680,1,[["STEFAN","8L"],["COLIN","3Q"]]]],
"3P":[[15287400,15308000,0,[["STEFAN","8L"],["COLIN","3Q"]]]],
"3R":[[1629160,1645800,0,[["MORDERSE LAS UÑAS","3U"],["TIRAR DEL LÓBULO","3T"]]]],
"3Vbf":[[8750800,8767400,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Vbs":[[8993080,9009680,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3VA":[[12621880,12638520,1,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Vff":[[8508520,8525120,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Vfs":[[2093000,2109600,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Vx":[[2177120,2193720,1,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Wbf":[[9262600,9279200,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Wbs":[[9532120,9548720,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Wff":[[6527800,6544400,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3Wfs":[[9804840,9821440,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"3X":[[1722280,1738880,0,[["TOMARLAS","8B"],["TIRAR DE LA CADENA","nsg-FlushThemChoice3X"]]]],
"3Xa":[[12652440,12669040,1,[["TOMARLAS","8B"],["TIRAR DE LA CADENA","nsg-FlushThemChoice3X"]]]],
"3Xac":[[12553240,12569840,0,[["TIRARLAS A LA BASURA","nsg-ThrowThemChoice"],["TIRAR DE LA CADENA","nsg-FlushThemChoice3X"]]]],
"3Xcd":[[6255080,6271680,0,[["TIRARLAS A LA BASURA","nsg-ThrowThemChoice"],["TIRAR DE LA CADENA","nsg-FlushThemChoice3X"]]]],
"3Xxa":[[1848000,1864640,1,[["TOMARLAS","8B"],["TIRAR DE LA CADENA","nsg-FlushThemChoice3X"]]]],
"3Xxc":[[16376720,16393320,0,[["TIRARLAS A LA BASURA","8B"],["TIRAR DE LA CADENA","nsg-FlushThemChoice3X"]]]],
"3Z":[[2231360,2247960,0,[["COGER LA FOTO FAMILIAR","nsg-FamilyPhotoChoice"],["COGER EL LIBRO","nsg-BookChoice"]]]],
"4C1":[[7337480,7354080,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"4C2":[[2428000,2444600,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"4D1":[[11119960,11136560,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"4D2":[[12283200,12299800,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"5A":[[3668120,3684720,0,[["MATAR A PAPÁ","5H"],["ECHARSE ATRÁS","5G"]]]],
"5AD":[[3887320,3903920,0,[["NI IDEA","5AF"],["SE TIRÓ","5AE"]]]],
"5AD2":[[14472960,14489560,0,[["NI IDEA","5AF"],["SE TIRÓ","5AE"]]]],
"5AG":[[14788920,14805520,0,[["DEJARLE IR","5AH"],["MATARLE","5AJ"]]]],
"5AG2":[[13864080,13880680,0,[["DEJARLE IR","5AH"],["MATARLE","5AJ"]]]],
"5Q":[[13563120,13579720,0,[["SÍ","5U"],["NO","5T"]]]],
"5QA":[[3778800,3795400,0,[["SÍ","5UA"],["NO","5TA"]]]],
"5V":[[3731040,3747640,0,[["ENTERRAR EL CUERPO","nsg-5V-0"],["TROCEAR EL CUERPO","nsg-5V-1"]]]],
"5VA":[[4165480,4182080,1,[["ENTERRAR EL CUERPO","nsg-5V-0"],["TROCEAR EL CUERPO","nsg-5V-1"]]]],
"6A":[[5276760,5309200,1,[["CÓDIGO 20541","6C"],["CÓDIGO INCORRECTO","6D"]]]],
"6B":[[7416120,7432720,1,[["CÓDIGO 20541","6C"],["CÓDIGO INCORRECTO","6D"]]]],
"7A":[[2458200,2474800,0,[["CONTARLE MÁS","7B"],["INTENTAR EXPLICARLO","7B2"]]]],
"7B":[[2482840,2499440,0,[["CONTARLE MÁS","7C"],["PARAR LA CONVERSACIÓN","7D"]]]],
"7D":[[2619520,2637160,0,[["SÍ","Yeah"],["CLARO QUE SÍ","FYeah"]],[2642680,2659280,0,[["SALTAR POR LA VENTANA","7L"],["LUCHAR CONTRA ELLA","7H"]]]],
"7H":[[6715400,6732000,0,[["GOLPE KÁRATE A PAPÁ","7K"],["PATADA EN LOS HUEVOS","7J"]]]],
"8J":[[4774520,4791120,0,[["SÍ","8JA"],["NO","nsg-8J-1"]]]],
"8JB1":[[13029560,13046160,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"8JB2":[[13061520,13078120,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"8K":[[4449120,4465720,0,[["ECHAR EL TÉ SOBRE EL ORDENADOR","nsg-8K-0"],["DESTRUIR EL ORDENADOR","nsg-8K-1"]]]],
"R5":[[16488240,16522800,1,[["VISITAR AL DR. HAYNES","R5"],["VOLVER","3Nx"]]]],
"R1":[[15983280,16016160,0,[["COGER LA FOTO","R1"],["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"]]]],
"S34A":[[17392200,17443880,0,[["SEGUIR A COLIN","R4"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S34B":[[16908680,16960360,0,[["SEGUIR A COLIN","R4"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S35A":[[17512680,17564360,0,[["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S35B":[[16969240,17020920,0,[["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S36A":[[17573240,17624600,0,[["COGER LA FOTO","R1"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S36B":[[17090360,17142040,0,[["COGER LA FOTO","R1"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S37A":[[4474280,4525960,0,[["COGER EL CONEJO DE PAPÁ","R2"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S37B":[[17150920,17202600,0,[["COGER EL CONEJO DE PAPÁ","R2"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S38A":[[17271720,17323400,0,[["'PROGRAM & CONTROL'","R6"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S38B":[[17211480,17263160,0,[["'PROGRAM & CONTROL'","R6"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S44A":[[17331960,17383640,0,[["HABLAR DE MAMÁ","R3"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S44B":[[16848080,16899760,0,[["HABLAR DE MAMÁ","R3"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S59A":[[17452440,17504120,0,[["¿TROCEAR O ENTERRAR?","nsg-S59A-0"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"S59B":[[17029800,17081480,0,[["¿TROCEAR O ENTERRAR?","nsg-S59B-0"],["SALIR A LOS CRÉDITOS","0cr1"]]]],
"SS1":[[15922400,15951680,0,[["HABLAR DE MAMÁ","R3"],["SEGUIR A COLIN","R4"]]]],
"SS2":[[15954040,15983280,0,[["COGER LA FOTO","R1"],["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"]]]],
"SS3":[[16018520,16047760,0,[["COGER EL CONEJO DE PAPÁ","R2"],["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"]]]],
"SS4":[[16050120,16079360,0,[["SEGUIR A COLIN","R4"],["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"]]]],
"SS5":[[16080160,16110960,0,[["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"]]]],
"SS6":[[16113320,16142560,0,[["HABLAR DE MAMÁ","R3"],["MATAR A PAPÁ","5H"]]]],
"SS7":[[16175080,16204320,1,[["COGER LA FOTO","R1"],["MATAR A PAPÁ","5H"]]]],
"SS8":[[16206680,16235920,1,[["COGER EL CONEJO DE PAPÁ","R2"],["MATAR A PAPÁ","5H"]]]],
"SS9":[[16238280,16267520,1,[["SEGUIR A COLIN","R4"],["MATAR A PAPÁ","5H"]]]],
"SS10":[[6800480,6831280,0,[["VOLVER","1PA"]]]],
"SS11":[[16269880,16299160,1,[["¿TRABAJAR EN TUCKERSOFT?","nsg-SS11-0"],["VOLVER","3Ax"]]]],
"SS12":[[16301600,16330840,1,[["HABLAR DE MAMÁ","R3"],["VOLVER","3Ax"]]]],
"SS13":[[1426120,1456960,0,[["VOLVER","3Ax"]]]],
"SS14":[[16333200,16362480,1,[["HABLAR DE MAMÁ","R3"],["VOLVER","nsg-SS14-1"]]]],
"SS15":[[1805360,1834640,1,[["SEGUIR A COLIN","R4"],["VOLVER","nsg-SS15-1"]]]],
"SS16":[[16395680,16424960,1,[["HABLAR DE MAMÁ","R3"],["VOLVER","3Vx"]]]],
"SS17":[[2131480,2160760,1,[["SEGUIR A COLIN","R4"],["VOLVER","3Vx"]]]],
"SS18":[[16425760,16456600,0,[["VOLVER","3Vx"]]]],
"SS19":[[16458960,16488240,1,[["HABLAR DE MAMÁ","R3"],["VOLVER","3Nx"]]]],
"SS20":[[3330160,3359440,1,[["VISITAR AL DR. HAYNES","R5"],["VOLVER","3Nx"]]]],
"SS21":[[16524960,16554400,1,[["'PROGRAM & CONTROL'","R6"],["MATAR A PAPÁ","5H"]]]],
"SS22":[[16556760,16586000,1,[["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice"],["MATAR A PAPÁ","5H"]]]],
"SS50":[[16588320,16617600,0,[["HABLAR DE MAMÁ","nsg-SS50-0"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS51":[[2721360,2750640,0,[["SEGUIR A COLIN","nsg-SS51-0"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS52":[[4087160,4116440,0,[["¿TROCEAR O ENTERRAR?","nsg-SS52-0"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS53":[[16699720,16729000,0,[["¿TROCEAR O ENTERRAR?","nsg-SS53-0"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS54":[[16731320,16760600,0,[["¿QUIÉN ESTÁ AHÍ?","nsg-WhoThereChoice-SS54"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS55":[[16762920,16792200,0,[["COGER LA FOTO","nsg-SS55-0"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS56":[[6749720,6779000,0,[["COGER EL CONEJO DE PAPÁ","nsg-SS56-0"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"SS57":[[4871840,4901120,0,[["'PROGRAM & CONTROL'","R6"],["SALIR A LOS CRÉDITOS","0cr2"]]]],
"Z1":[[15616240,15632840,1,[["ECHAR EL TÉ SOBRE EL ORDENADOR","3B"],["GRITAR A PAPÁ","3C"]]]],
"ZB":[[15567880,15584480,0,[["SÍ","nsg-2BChoice"],["NO","2GA"]]]],
"ZD":[[15842280,15858920,0,[["COGER LA FOTO FAMILIAR","nsg-FamilyPhotoChoice"],["COGER EL LIBRO","nsg-BookChoice"]]]],
"ZE":[[15903440,15920040,0,[["COGER LA FOTO FAMILIAR","nsg-FamilyPhotoChoice"],["COGER EL LIBRO","nsg-BookChoice"]]]],
"ZG":[[12881640,12898280,0,[["STEFAN","8L"],["COLIN","3Q"]]]],
"ZH":[[11417520,11434160,1,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"ZHw6":[[3534760,3551360,0,[["COGER LA FOTO FAMILIAR","nsg-FamilyPhotoChoice"],["COGER EL LIBRO","nsg-BookChoice"]]]],
"ZJ":[[7121880,7138480,0,[["COGER LA FOTO FAMILIAR","nsg-FamilyPhotoChoice"],["COGER EL LIBRO","nsg-BookChoice"]]]],
"ZK":[[11303960,11320600,0,[["JFD","nsg-JFDChoice"],["PAX","nsg-PAXChoice"]]]],
"ZK1":[[9927960,9944600,0,[["TOY","8J"],["PAX","nsg-PAXChoice"]]]],
"ZK2":[[10019320,10035960,0,[["PAX","nsg-PAXChoice"],["PAC","nsg-PACStudyChoice"]]]],
"ZK3":[[14430280,14446920,0,[["TOY","8J"],["PAC","nsg-PACStudyChoice"]]]],
"ZP":[[7087640,7104240,1,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"ZQ":[[12706640,12723240,0,[["COGER LA FOTO FAMILIAR","nsg-FamilyPhotoChoice"],["COGER EL LIBRO","nsg-BookChoice"]]]],
"Z4":[[15736120,15752760,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"Z4cd":[[15783200,15799800,0,[["DESTRUIR EL ORDENADOR","3Y"],["GOLPEAR LA MESA","3Z"]]]],
"Z61a":[[17942400,17959000,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z61b":[[17984000,18000600,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z61c":[[18040920,18057520,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z61d":[[18092720,18109320,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z61e":[[18141200,18157840,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z61f":[[18185960,18202600,0,[["PACS","nsg-LettersPACSChoice"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z62a":[[17653400,17670000,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z62b":[[17695000,17711600,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z62c":[[17751920,17768520,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z62d":[[17803720,17820320,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z62e":[[17852200,17868840,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]],
"Z62f":[[17896960,17913600,0,[["LOGO 'N' DE NETFLIX","7A"],["SÍMBOLO DEL OSO BLANCO","nsg-WhiteBearChoice"]]]]
};

/* =========================  RUNTIME  ========================= */

const $ = s => document.querySelector(s);
const app = $('#app');
const stage = $('#stage');
const video = $('#player');
const subsEl = $('#subs');
const choicesEl = $('#choices');
const listEl = $('#choicelist');
const timerBar = $('#timerbar');
const segFill = $('#segfill');
const globalFill = $('#globalfill');
const startEl = $('#start');
const errEl = $('#err');

let cur = null;            // segmento actual
let segStart = 0, segEnd = 0;
let live = [];             // momentos vivos del segmento
let pendingJump = null;
let running = false;
let cues = [];
let lastCue = null;
let totalMs = 0;
let idleTimer = 0;

/* ---------- resolución del grafo ---------- */
function rawTarget(id) {
  return id && SEGMENTS[id] ? id : null;
}

function resolveGroup(name, depth = 0) {
  if (depth > 12) return null;
  const g = GROUPS[name];
  if (!g) return rawTarget(name.replace(/^nsg-/, ''));
  for (const entry of g) {
    if (typeof entry === 'string') {
      const t = rawTarget(entry);
      if (t) return t;
    } else if (entry.segmentGroup) {
      const t = resolveGroup(entry.segmentGroup, depth + 1);
      if (t) return t;
    } else if (entry.segment) {
      const t = rawTarget(entry.segment);
      if (t) return t;
    }
  }
  return null;
}

function resolveRef(ref) {
  if (!ref) return null;
  if (ref.startsWith('nsg-')) return resolveGroup(ref);
  return rawTarget(ref);
}

/* ---------- navegación ---------- */
function jumpTo(id) {
  const seg = SEGMENTS[id];
  if (!seg) return;
  pendingJump = null;
  cur = id;
  segStart = seg[0];
  segEnd = seg[1] == null ? Number.POSITIVE_INFINITY : seg[1];
  live = (MOMENTS[id] || []).map(m => ({ s0: m[0], s1: m[1], def: m[2], opts: m[3], shown: false, done: false }));
  closeChoices();
  // +30 ms para no caer justo sobre un borde
  video.currentTime = segStart / 1000 + 0.03;
  updateBars(segStart / 1000);
}

function advance() {
  const seg = SEGMENTS[cur];
  let target = pendingJump;
  pendingJump = null;
  if (!target) {
    const asGroup = GROUPS['nsg-' + cur];
    if (asGroup) target = resolveGroup('nsg-' + cur);
  }
  if (!target && seg) target = rawTarget(seg[2]);
  if (target) jumpTo(target);
}

/* ---------- opciones ---------- */
function openChoices(m) {
  listEl.textContent = '';
  m.opts.forEach((opt, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'choice';
    b.textContent = opt[0];
    b.addEventListener('mouseenter', () => b.classList.add('hot'));
    b.addEventListener('mouseleave', () => b.classList.remove('hot'));
    b.addEventListener('click', ev => {
      ev.stopPropagation();
      pick(m, i);
    });
    listEl.appendChild(b);
  });
  choicesEl.classList.remove('hidden');
}

function closeChoices() {
  choicesEl.classList.add('hidden');
  listEl.textContent = '';
  timerBar.style.transform = 'scaleX(1)';
}

function pick(m, i) {
  if (m.done) return;
  m.done = true;
  closeChoices();
  const target = resolveRef(m.opts[i][1]);
  if (!target) return;              // opción "falsa": seguimos reproduciendo
  jumpTo(target);
}

/* ---------- bucle principal ---------- */
function tick() {
  if (!running) return;
  requestAnimationFrame(tick);

  const ms = video.currentTime * 1000;

  // momentos
  for (const m of live) {
    if (m.done) continue;
    if (!m.shown && ms >= m.s0) { m.shown = true; openChoices(m); }
    if (m.shown) {
      const p = Math.min(1, Math.max(0, (ms - m.s0) / (m.s1 - m.s0)));
      timerBar.style.transform = 'scaleX(' + (1 - p) + ')';
      if (ms >= m.s1) {
        // se agotó el tiempo: se aplica la opción por defecto
        m.done = true;
        closeChoices();
        const target = resolveRef(m.opts[m.def][1]);
        if (target) { jumpTo(target); return; }
      }
    }
  }

  // fin de segmento
  if (ms >= segEnd) { advance(); return; }

  updateBars(ms);
  renderSubs(ms);
}

function updateBars(ms) {
  const span = segEnd - segStart;
  segFill.style.width = (span > 0 && isFinite(span) ? Math.min(100, ((ms * 1000 - segStart) / span) * 100) : 0) + '%';
  if (totalMs) globalFill.style.width = Math.min(100, (ms / totalMs) * 100) + '%';
}

/* ---------- subtítulos ---------- */
function vttTime(s) {
  const m = /(?:(\d+):)?(\d{1,2}):(\d{2})[.,](\d{1,3})/.exec(s.trim());
  if (!m) return null;
  const h = m[1] ? parseInt(m[1], 10) : 0;
  return ((h * 3600) + parseInt(m[2], 10) * 60 + parseInt(m[3], 10)) * 1000 + parseInt(m[4].padEnd(3, '0'), 10);
}

function parseVTT(text) {
  const out = [];
  const blocks = text.replace(/^\uFEFF/, '').split(/\r?\n\r?\n/);
  for (const block of blocks) {
    const lines = block.split(/\r?\n/).filter(Boolean);
    if (!lines.length) continue;
    const first = lines[0].trim();
    if (/^(WEBVTT|NOTE|STYLE|REGION)/.test(first)) continue;
    const idx = lines.findIndex(l => l.includes('-->'));
    if (idx === -1) continue;
    const [a, b] = lines[idx].split('-->');
    const s = vttTime(a), e = vttTime(b);
    if (s == null || e == null) continue;
    const body = lines.slice(idx + 1).join('\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\{[^}]+\}/g, '')
      .trim();
    if (body) out.push({ s, e, t: body });
  }
  out.sort((x, y) => x.s - y.s);
  return out;
}

function findCue(ms) {
  let lo = 0, hi = cues.length - 1, best = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (cues[mid].s <= ms) { best = mid; lo = mid + 1; } else hi = mid - 1;
  }
  if (best >= 0) {
    const c = cues[best];
    if (ms < c.e) return c;
  }
  return null;
}

function renderSubs(ms) {
  const c = findCue(ms);
  if (c === lastCue) return;
  lastCue = c;
  subsEl.textContent = c ? c.t : '';
}

async function loadSubs() {
  try {
    const r = await fetch(SUBS_SRC, { cache: 'no-cache' });
    if (!r.ok) throw new Error(r.status);
    cues = parseVTT(await r.text());
    if (!cues.length) throw new Error('vacío');
  } catch (e) {
    // plan B: <track> nativo
    try {
      const tr = document.createElement('track');
      tr.kind = 'subtitles';
      tr.label = 'es-419';
      tr.srclang = 'es-419';
      tr.src = SUBS_SRC;
      tr.default = true;
      video.appendChild(tr);
      await new Promise((res, rej) => {
        tr.addEventListener('load', res, { once: true });
        tr.addEventListener('error', rej, { once: true });
        setTimeout(rej, 4000);
      });
      const list = tr.track.cues || [];
      cues = Array.from(list).map(c => ({ s: c.startTime * 1000, e: c.endTime * 1000, t: c.text }));
      tr.track.mode = 'hidden';
    } catch (_) {
      cues = [];
    }
  }
}

/* ---------- pantalla completa simulada ---------- */
function enterFs() {
  app.classList.add('fs');
  $('#exitfs').classList.remove('hidden');
  wake();
}

function exitFs() {
  app.classList.remove('fs', 'idle');
  $('#exitfs').classList.add('hidden');
}

/* ---------- inactividad: ocultar cursor ---------- */
function wake() {
  app.classList.remove('idle');
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => app.classList.add('idle'), 2200);
}

/* ---------- arranque ---------- */
async function start() {
  startEl.classList.add('hidden');
  await loadSubs();
  running = true;
  jumpTo('1A');
  try { await video.play(); } catch (_) {
    errEl.textContent = '';
    video.muted = true;
    await video.play().catch(() => {});
  }
  requestAnimationFrame(tick);
}

video.addEventListener('loadedmetadata', () => {
  totalMs = (video.duration || 0) * 1000;
});

// pausa/reanudar con clic (sin exponer controles)
$('#clicklayer').addEventListener('click', () => {
  if (!running) return;
  if (video.paused) video.play().catch(() => {}); else video.pause();
});

// ningún menú contextual, ni siquiera el del vídeo
['contextmenu', 'dblclick'].forEach(ev =>
  app.addEventListener(ev, e => e.preventDefault())
);

// teclado: todo bloqueado salvo Esc
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (app.classList.contains('fs')) { e.preventDefault(); exitFs(); }
    return;
  }
  const blocked = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' ','Spacebar','Home','End',
                   'PageUp','PageDown','k','j','l','f','m','MediaPlayPause','MediaTrackNext'];
  if (blocked.includes(e.key)) e.preventDefault();
}, { passive: false });

video.addEventListener('click', () => {});

$('#play').addEventListener('click', start);
$('#fsbtn').addEventListener('click', e => { e.stopPropagation(); enterFs(); });
$('#exitfs').addEventListener('click', e => { e.stopPropagation(); exitFs(); });

app.addEventListener('mousemove', wake);

// PiP nativo fuera
video.disablePictureInPicture = true;

// arranque rápido si el navegador ya tiene el vídeo listo
window.addEventListener('error', () => {
  if (!running) {
    errEl.classList.remove('hidden');
    errEl.textContent = 'No se pudo cargar bandersnatch.mp4.\nComprueba que el archivo está en la raíz del repositorio y que sirves la página por HTTP (no file://).';
  }
});
