const cities = [
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3612,
    "longitude": 78.8092,
    "rank": 1,
    "population": 12495113,
    "growth_2000_2025": 63.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1679,
    "longitude": 78.2244,
    "rank": 2,
    "population": 6555643,
    "growth_2000_2025": 55.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2125,
    "longitude": 73.5745,
    "rank": 3,
    "population": 9748624,
    "growth_2000_2025": 63.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5528,
    "longitude": 81.0949,
    "rank": 4,
    "population": 4622984,
    "growth_2000_2025": 40.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2705,
    "longitude": 72.9199,
    "rank": 5,
    "population": 21451545,
    "growth_2000_2025": 27.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2945,
    "longitude": 73.5121,
    "rank": 6,
    "population": 4373491,
    "growth_2000_2025": 67.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6999,
    "longitude": 80.844,
    "rank": 7,
    "population": 4623401,
    "growth_2000_2025": 38.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6861,
    "longitude": 80.7563,
    "rank": 8,
    "population": 4784077,
    "growth_2000_2025": 49.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7358,
    "longitude": 72.8214,
    "rank": 9,
    "population": 12596514,
    "growth_2000_2025": 56.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.4662,
    "longitude": 75.4268,
    "rank": 10,
    "population": 3909626,
    "growth_2000_2025": 43.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3233,
    "longitude": 87.8651,
    "rank": 11,
    "population": 20735210,
    "growth_2000_2025": 12.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3589,
    "longitude": 72.5829,
    "rank": 12,
    "population": 24105089,
    "growth_2000_2025": 35.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8281,
    "longitude": 88.4519,
    "rank": 13,
    "population": 21913815,
    "growth_2000_2025": 11.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.276,
    "longitude": 77.4145,
    "rank": 14,
    "population": 21556369,
    "growth_2000_2025": 38.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7994,
    "longitude": 81.1844,
    "rank": 15,
    "population": 4603510,
    "growth_2000_2025": 41.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7949,
    "longitude": 73.0086,
    "rank": 16,
    "population": 5862102,
    "growth_2000_2025": 55.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1331,
    "longitude": 80.7125,
    "rank": 17,
    "population": 7631134,
    "growth_2000_2025": 41.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.5739,
    "longitude": 72.8553,
    "rank": 18,
    "population": 25934438,
    "growth_2000_2025": 33.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1373,
    "longitude": 72.8769,
    "rank": 19,
    "population": 13644645,
    "growth_2000_2025": 30.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5365,
    "longitude": 76.9,
    "rank": 20,
    "population": 12202138,
    "growth_2000_2025": 39.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8394,
    "longitude": 88.3824,
    "rank": 21,
    "population": 22224126,
    "growth_2000_2025": 11.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9519,
    "longitude": 72.1748,
    "rank": 22,
    "population": 9839428,
    "growth_2000_2025": 56.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0335,
    "longitude": 72.5764,
    "rank": 23,
    "population": 7217061,
    "growth_2000_2025": 55.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.2772,
    "longitude": 77.0683,
    "rank": 24,
    "population": 15877442,
    "growth_2000_2025": 43.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7483,
    "longitude": 73.9432,
    "rank": 25,
    "population": 6906552,
    "growth_2000_2025": 72.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8314,
    "longitude": 78.2148,
    "rank": 26,
    "population": 6382151,
    "growth_2000_2025": 61.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8655,
    "longitude": 80.2386,
    "rank": 27,
    "population": 11314456,
    "growth_2000_2025": 39.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6345,
    "longitude": 79.939,
    "rank": 28,
    "population": 4985863,
    "growth_2000_2025": 40.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.825,
    "longitude": 77.5747,
    "rank": 29,
    "population": 7514924,
    "growth_2000_2025": 69.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4551,
    "longitude": 88.592,
    "rank": 30,
    "population": 17708564,
    "growth_2000_2025": 11.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.481,
    "longitude": 76.8741,
    "rank": 31,
    "population": 18317247,
    "growth_2000_2025": 37.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.63,
    "longitude": 73.2445,
    "rank": 32,
    "population": 10935053,
    "growth_2000_2025": 31.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5842,
    "longitude": 77.1753,
    "rank": 33,
    "population": 12038433,
    "growth_2000_2025": 59.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8432,
    "longitude": 75.7798,
    "rank": 34,
    "population": 2195106,
    "growth_2000_2025": 45.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.168,
    "longitude": 72.0891,
    "rank": 35,
    "population": 5008857,
    "growth_2000_2025": 59.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9709,
    "longitude": 77.0819,
    "rank": 36,
    "population": 19724499,
    "growth_2000_2025": 48.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8916,
    "longitude": 72.4692,
    "rank": 37,
    "population": 8602964,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1525,
    "longitude": 73.8685,
    "rank": 38,
    "population": 10670197,
    "growth_2000_2025": 70.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4631,
    "longitude": 87.89,
    "rank": 39,
    "population": 7893462,
    "growth_2000_2025": 9.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2111,
    "longitude": 78.948,
    "rank": 40,
    "population": 10417973,
    "growth_2000_2025": 51.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5978,
    "longitude": 75.3902,
    "rank": 41,
    "population": 2306064,
    "growth_2000_2025": 38.0
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6688,
    "longitude": 72.8595,
    "rank": 42,
    "population": 17924499,
    "growth_2000_2025": 32.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.6351,
    "longitude": 78.0488,
    "rank": 43,
    "population": 12836603,
    "growth_2000_2025": 53.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3994,
    "longitude": 72.2117,
    "rank": 44,
    "population": 5440701,
    "growth_2000_2025": 50.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3223,
    "longitude": 78.6014,
    "rank": 45,
    "population": 11221199,
    "growth_2000_2025": 54.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5105,
    "longitude": 76.221,
    "rank": 46,
    "population": 4803997,
    "growth_2000_2025": 47.9
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.5407,
    "longitude": 80.6929,
    "rank": 47,
    "population": 6036496,
    "growth_2000_2025": 45.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 19.0077,
    "longitude": 73.4329,
    "rank": 48,
    "population": 3960575,
    "growth_2000_2025": 60.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0438,
    "longitude": 77.4105,
    "rank": 49,
    "population": 17236259,
    "growth_2000_2025": 44.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4513,
    "longitude": 78.8128,
    "rank": 50,
    "population": 8204514,
    "growth_2000_2025": 62.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3622,
    "longitude": 73.1277,
    "rank": 51,
    "population": 16908982,
    "growth_2000_2025": 35.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.956,
    "longitude": 73.5306,
    "rank": 52,
    "population": 10172978,
    "growth_2000_2025": 68.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.9942,
    "longitude": 80.7621,
    "rank": 53,
    "population": 10230210,
    "growth_2000_2025": 41.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8778,
    "longitude": 80.5877,
    "rank": 54,
    "population": 9621417,
    "growth_2000_2025": 39.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5983,
    "longitude": 76.2722,
    "rank": 55,
    "population": 2003392,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0732,
    "longitude": 79.9723,
    "rank": 56,
    "population": 7527706,
    "growth_2000_2025": 43.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3102,
    "longitude": 76.8716,
    "rank": 57,
    "population": 29406296,
    "growth_2000_2025": 46.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.5177,
    "longitude": 80.6619,
    "rank": 58,
    "population": 7520932,
    "growth_2000_2025": 38.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0848,
    "longitude": 81.043,
    "rank": 59,
    "population": 2471919,
    "growth_2000_2025": 38.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8433,
    "longitude": 76.7406,
    "rank": 60,
    "population": 10207941,
    "growth_2000_2025": 48.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4303,
    "longitude": 79.8863,
    "rank": 61,
    "population": 6420843,
    "growth_2000_2025": 33.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1982,
    "longitude": 72.8135,
    "rank": 62,
    "population": 6264551,
    "growth_2000_2025": 45.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6734,
    "longitude": 87.9018,
    "rank": 63,
    "population": 19475601,
    "growth_2000_2025": 13.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2461,
    "longitude": 72.7878,
    "rank": 64,
    "population": 12351766,
    "growth_2000_2025": 51.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5653,
    "longitude": 88.3117,
    "rank": 65,
    "population": 13394419,
    "growth_2000_2025": 10.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8329,
    "longitude": 73.4297,
    "rank": 66,
    "population": 7768259,
    "growth_2000_2025": 60.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9553,
    "longitude": 73.2374,
    "rank": 67,
    "population": 27150164,
    "growth_2000_2025": 35.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8852,
    "longitude": 80.0481,
    "rank": 68,
    "population": 9790615,
    "growth_2000_2025": 41.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8939,
    "longitude": 77.3659,
    "rank": 69,
    "population": 16842762,
    "growth_2000_2025": 39.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.5486,
    "longitude": 80.3553,
    "rank": 70,
    "population": 6267404,
    "growth_2000_2025": 45.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5469,
    "longitude": 73.6002,
    "rank": 71,
    "population": 4558092,
    "growth_2000_2025": 82.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6103,
    "longitude": 79.9156,
    "rank": 72,
    "population": 7004966,
    "growth_2000_2025": 43.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0252,
    "longitude": 72.6325,
    "rank": 73,
    "population": 28084222,
    "growth_2000_2025": 31.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1038,
    "longitude": 72.981,
    "rank": 74,
    "population": 16593983,
    "growth_2000_2025": 28.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.685,
    "longitude": 72.1195,
    "rank": 75,
    "population": 6133728,
    "growth_2000_2025": 44.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0576,
    "longitude": 77.1879,
    "rank": 76,
    "population": 17539670,
    "growth_2000_2025": 72.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0886,
    "longitude": 80.0496,
    "rank": 77,
    "population": 14104467,
    "growth_2000_2025": 33.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.6188,
    "longitude": 78.2268,
    "rank": 78,
    "population": 13474781,
    "growth_2000_2025": 59.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.421,
    "longitude": 78.635,
    "rank": 79,
    "population": 12649781,
    "growth_2000_2025": 46.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0267,
    "longitude": 73.1765,
    "rank": 80,
    "population": 23604267,
    "growth_2000_2025": 37.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5518,
    "longitude": 77.5991,
    "rank": 81,
    "population": 12576869,
    "growth_2000_2025": 66.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.8889,
    "longitude": 73.2093,
    "rank": 82,
    "population": 28789073,
    "growth_2000_2025": 26.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 23.0583,
    "longitude": 88.1357,
    "rank": 83,
    "population": 11495895,
    "growth_2000_2025": 12.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9153,
    "longitude": 74.0598,
    "rank": 84,
    "population": 7610830,
    "growth_2000_2025": 72.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3126,
    "longitude": 74.2106,
    "rank": 85,
    "population": 9587417,
    "growth_2000_2025": 70.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2282,
    "longitude": 75.5398,
    "rank": 86,
    "population": 4294960,
    "growth_2000_2025": 46.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8137,
    "longitude": 77.1704,
    "rank": 87,
    "population": 9683566,
    "growth_2000_2025": 69.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2271,
    "longitude": 80.2086,
    "rank": 88,
    "population": 4911728,
    "growth_2000_2025": 33.6
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.8103,
    "longitude": 80.7866,
    "rank": 89,
    "population": 4611483,
    "growth_2000_2025": 36.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1074,
    "longitude": 75.3312,
    "rank": 90,
    "population": 2691761,
    "growth_2000_2025": 49.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5855,
    "longitude": 78.8484,
    "rank": 91,
    "population": 13759046,
    "growth_2000_2025": 50.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8262,
    "longitude": 73.4257,
    "rank": 92,
    "population": 10476060,
    "growth_2000_2025": 82.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5714,
    "longitude": 77.8098,
    "rank": 93,
    "population": 12554867,
    "growth_2000_2025": 71.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6569,
    "longitude": 72.6937,
    "rank": 94,
    "population": 28353230,
    "growth_2000_2025": 28.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.365,
    "longitude": 79.9906,
    "rank": 95,
    "population": 7788490,
    "growth_2000_2025": 46.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8201,
    "longitude": 78.1656,
    "rank": 96,
    "population": 8167468,
    "growth_2000_2025": 44.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7439,
    "longitude": 77.1363,
    "rank": 97,
    "population": 26486238,
    "growth_2000_2025": 49.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8768,
    "longitude": 78.2608,
    "rank": 98,
    "population": 13238520,
    "growth_2000_2025": 59.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1003,
    "longitude": 80.3069,
    "rank": 99,
    "population": 12042252,
    "growth_2000_2025": 33.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2725,
    "longitude": 88.4063,
    "rank": 100,
    "population": 17152405,
    "growth_2000_2025": 12.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.882,
    "longitude": 78.0884,
    "rank": 101,
    "population": 8600143,
    "growth_2000_2025": 64.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5763,
    "longitude": 76.9136,
    "rank": 102,
    "population": 15288789,
    "growth_2000_2025": 33.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1699,
    "longitude": 77.1225,
    "rank": 103,
    "population": 19022607,
    "growth_2000_2025": 36.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.9359,
    "longitude": 80.5457,
    "rank": 104,
    "population": 9546181,
    "growth_2000_2025": 33.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0883,
    "longitude": 72.1537,
    "rank": 105,
    "population": 5882754,
    "growth_2000_2025": 50.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.9853,
    "longitude": 79.9766,
    "rank": 106,
    "population": 5320020,
    "growth_2000_2025": 33.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3561,
    "longitude": 76.0125,
    "rank": 107,
    "population": 5645890,
    "growth_2000_2025": 56.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5105,
    "longitude": 73.4618,
    "rank": 108,
    "population": 4047302,
    "growth_2000_2025": 65.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1589,
    "longitude": 73.2295,
    "rank": 109,
    "population": 30134552,
    "growth_2000_2025": 38.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4059,
    "longitude": 78.5915,
    "rank": 110,
    "population": 12851665,
    "growth_2000_2025": 61.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4623,
    "longitude": 88.7052,
    "rank": 111,
    "population": 8709522,
    "growth_2000_2025": 10.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0212,
    "longitude": 72.7452,
    "rank": 112,
    "population": 10028701,
    "growth_2000_2025": 49.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5462,
    "longitude": 73.3713,
    "rank": 113,
    "population": 5521858,
    "growth_2000_2025": 80.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.2351,
    "longitude": 81.2725,
    "rank": 114,
    "population": 5480846,
    "growth_2000_2025": 51.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8494,
    "longitude": 80.5629,
    "rank": 115,
    "population": 14709615,
    "growth_2000_2025": 36.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8498,
    "longitude": 80.7081,
    "rank": 116,
    "population": 5197976,
    "growth_2000_2025": 36.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7337,
    "longitude": 77.5192,
    "rank": 117,
    "population": 25578993,
    "growth_2000_2025": 41.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.8347,
    "longitude": 80.9307,
    "rank": 118,
    "population": 2354392,
    "growth_2000_2025": 46.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4944,
    "longitude": 72.3447,
    "rank": 119,
    "population": 6480092,
    "growth_2000_2025": 56.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.6815,
    "longitude": 78.8439,
    "rank": 120,
    "population": 16183639,
    "growth_2000_2025": 63.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7811,
    "longitude": 73.4886,
    "rank": 121,
    "population": 7239859,
    "growth_2000_2025": 75.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5956,
    "longitude": 76.1032,
    "rank": 122,
    "population": 5815339,
    "growth_2000_2025": 53.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5169,
    "longitude": 88.8128,
    "rank": 123,
    "population": 15213865,
    "growth_2000_2025": 11.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7914,
    "longitude": 80.7165,
    "rank": 124,
    "population": 14590338,
    "growth_2000_2025": 32.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2033,
    "longitude": 72.9912,
    "rank": 125,
    "population": 10249608,
    "growth_2000_2025": 53.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2343,
    "longitude": 78.9165,
    "rank": 126,
    "population": 7493778,
    "growth_2000_2025": 47.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.808,
    "longitude": 77.4808,
    "rank": 127,
    "population": 29234242,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7119,
    "longitude": 77.9535,
    "rank": 128,
    "population": 16731586,
    "growth_2000_2025": 61.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.438,
    "longitude": 80.6042,
    "rank": 129,
    "population": 4140734,
    "growth_2000_2025": 47.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.3969,
    "longitude": 80.5838,
    "rank": 130,
    "population": 5178012,
    "growth_2000_2025": 40.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0422,
    "longitude": 81.1423,
    "rank": 131,
    "population": 5214786,
    "growth_2000_2025": 38.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0438,
    "longitude": 77.2055,
    "rank": 132,
    "population": 6531764,
    "growth_2000_2025": 59.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.0595,
    "longitude": 74.3246,
    "rank": 133,
    "population": 9624191,
    "growth_2000_2025": 80.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.5384,
    "longitude": 79.9822,
    "rank": 134,
    "population": 13572702,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8349,
    "longitude": 78.5442,
    "rank": 135,
    "population": 12118082,
    "growth_2000_2025": 64.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0376,
    "longitude": 73.3084,
    "rank": 136,
    "population": 29135295,
    "growth_2000_2025": 32.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.657,
    "longitude": 77.198,
    "rank": 137,
    "population": 13623681,
    "growth_2000_2025": 75.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3609,
    "longitude": 88.7753,
    "rank": 138,
    "population": 20743277,
    "growth_2000_2025": 11.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.5789,
    "longitude": 72.1013,
    "rank": 139,
    "population": 5800998,
    "growth_2000_2025": 44.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4796,
    "longitude": 77.0114,
    "rank": 140,
    "population": 17026314,
    "growth_2000_2025": 34.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9859,
    "longitude": 73.1287,
    "rank": 141,
    "population": 14277073,
    "growth_2000_2025": 34.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.3911,
    "longitude": 80.7048,
    "rank": 142,
    "population": 5118314,
    "growth_2000_2025": 47.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.5677,
    "longitude": 72.9521,
    "rank": 143,
    "population": 7173896,
    "growth_2000_2025": 51.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3776,
    "longitude": 72.9732,
    "rank": 144,
    "population": 11553081,
    "growth_2000_2025": 56.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4687,
    "longitude": 88.3439,
    "rank": 145,
    "population": 20028671,
    "growth_2000_2025": 13.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3713,
    "longitude": 80.497,
    "rank": 146,
    "population": 9419694,
    "growth_2000_2025": 37.7
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.2206,
    "longitude": 81.286,
    "rank": 147,
    "population": 4337942,
    "growth_2000_2025": 46.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2582,
    "longitude": 75.4121,
    "rank": 148,
    "population": 5648055,
    "growth_2000_2025": 42.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9415,
    "longitude": 77.5199,
    "rank": 149,
    "population": 19668662,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.7894,
    "longitude": 73.319,
    "rank": 150,
    "population": 18310375,
    "growth_2000_2025": 37.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4878,
    "longitude": 72.4902,
    "rank": 151,
    "population": 30314957,
    "growth_2000_2025": 35.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9544,
    "longitude": 88.5385,
    "rank": 152,
    "population": 17600109,
    "growth_2000_2025": 9.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.4344,
    "longitude": 75.4617,
    "rank": 153,
    "population": 4814801,
    "growth_2000_2025": 38.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.303,
    "longitude": 72.9109,
    "rank": 154,
    "population": 8872385,
    "growth_2000_2025": 59.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6734,
    "longitude": 73.0746,
    "rank": 155,
    "population": 28419112,
    "growth_2000_2025": 36.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.0974,
    "longitude": 88.7571,
    "rank": 156,
    "population": 16536081,
    "growth_2000_2025": 11.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5893,
    "longitude": 78.7514,
    "rank": 157,
    "population": 6095057,
    "growth_2000_2025": 54.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.622,
    "longitude": 77.5502,
    "rank": 158,
    "population": 16929275,
    "growth_2000_2025": 70.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.8456,
    "longitude": 73.3452,
    "rank": 159,
    "population": 11159210,
    "growth_2000_2025": 29.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0221,
    "longitude": 72.3176,
    "rank": 160,
    "population": 11931128,
    "growth_2000_2025": 41.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3768,
    "longitude": 72.6245,
    "rank": 161,
    "population": 6985295,
    "growth_2000_2025": 57.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1195,
    "longitude": 74.0227,
    "rank": 162,
    "population": 10408215,
    "growth_2000_2025": 67.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1504,
    "longitude": 72.7972,
    "rank": 163,
    "population": 8038724,
    "growth_2000_2025": 54.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.314,
    "longitude": 77.5161,
    "rank": 164,
    "population": 13632962,
    "growth_2000_2025": 44.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1638,
    "longitude": 88.0776,
    "rank": 165,
    "population": 20367125,
    "growth_2000_2025": 9.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7685,
    "longitude": 88.2863,
    "rank": 166,
    "population": 10043228,
    "growth_2000_2025": 11.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1714,
    "longitude": 76.2108,
    "rank": 167,
    "population": 4848207,
    "growth_2000_2025": 43.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.2876,
    "longitude": 77.0417,
    "rank": 168,
    "population": 18378650,
    "growth_2000_2025": 43.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.085,
    "longitude": 77.3893,
    "rank": 169,
    "population": 8829026,
    "growth_2000_2025": 70.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7974,
    "longitude": 80.5264,
    "rank": 170,
    "population": 7180914,
    "growth_2000_2025": 39.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.83,
    "longitude": 77.6139,
    "rank": 171,
    "population": 23520520,
    "growth_2000_2025": 47.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7374,
    "longitude": 73.6837,
    "rank": 172,
    "population": 4123112,
    "growth_2000_2025": 62.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.9073,
    "longitude": 80.7595,
    "rank": 173,
    "population": 10951351,
    "growth_2000_2025": 46.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5511,
    "longitude": 76.0733,
    "rank": 174,
    "population": 5487184,
    "growth_2000_2025": 39.0
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9529,
    "longitude": 75.939,
    "rank": 175,
    "population": 2281363,
    "growth_2000_2025": 54.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4548,
    "longitude": 80.5601,
    "rank": 176,
    "population": 12608813,
    "growth_2000_2025": 34.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5831,
    "longitude": 74.2431,
    "rank": 177,
    "population": 11196346,
    "growth_2000_2025": 82.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6226,
    "longitude": 72.7734,
    "rank": 178,
    "population": 24552365,
    "growth_2000_2025": 26.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3707,
    "longitude": 75.6982,
    "rank": 179,
    "population": 4804128,
    "growth_2000_2025": 55.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9968,
    "longitude": 73.01,
    "rank": 180,
    "population": 19987962,
    "growth_2000_2025": 34.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3069,
    "longitude": 77.3571,
    "rank": 181,
    "population": 25110417,
    "growth_2000_2025": 45.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3126,
    "longitude": 76.9954,
    "rank": 182,
    "population": 27893180,
    "growth_2000_2025": 36.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7366,
    "longitude": 78.0643,
    "rank": 183,
    "population": 11443739,
    "growth_2000_2025": 47.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2639,
    "longitude": 73.21,
    "rank": 184,
    "population": 11672454,
    "growth_2000_2025": 29.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4636,
    "longitude": 88.3783,
    "rank": 185,
    "population": 17774928,
    "growth_2000_2025": 11.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.022,
    "longitude": 72.9063,
    "rank": 186,
    "population": 11992440,
    "growth_2000_2025": 50.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8744,
    "longitude": 79.8678,
    "rank": 187,
    "population": 11438159,
    "growth_2000_2025": 39.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0475,
    "longitude": 78.8378,
    "rank": 188,
    "population": 9097915,
    "growth_2000_2025": 60.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9256,
    "longitude": 78.0322,
    "rank": 189,
    "population": 17426472,
    "growth_2000_2025": 71.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1099,
    "longitude": 75.907,
    "rank": 190,
    "population": 2249852,
    "growth_2000_2025": 55.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0183,
    "longitude": 76.2839,
    "rank": 191,
    "population": 4099250,
    "growth_2000_2025": 45.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5426,
    "longitude": 75.7441,
    "rank": 192,
    "population": 2079100,
    "growth_2000_2025": 49.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3727,
    "longitude": 72.7292,
    "rank": 193,
    "population": 12222078,
    "growth_2000_2025": 52.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3698,
    "longitude": 77.3462,
    "rank": 194,
    "population": 7897367,
    "growth_2000_2025": 67.9
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6411,
    "longitude": 80.0388,
    "rank": 195,
    "population": 10382827,
    "growth_2000_2025": 46.6
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.3767,
    "longitude": 80.8924,
    "rank": 196,
    "population": 3185235,
    "growth_2000_2025": 37.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5518,
    "longitude": 76.7398,
    "rank": 197,
    "population": 23908999,
    "growth_2000_2025": 49.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5776,
    "longitude": 73.4259,
    "rank": 198,
    "population": 8251458,
    "growth_2000_2025": 84.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1569,
    "longitude": 88.678,
    "rank": 199,
    "population": 8426637,
    "growth_2000_2025": 10.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.4255,
    "longitude": 78.0377,
    "rank": 200,
    "population": 17996181,
    "growth_2000_2025": 67.5
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.0766,
    "longitude": 88.2304,
    "rank": 201,
    "population": 20180945,
    "growth_2000_2025": 10.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5479,
    "longitude": 77.6854,
    "rank": 202,
    "population": 15133083,
    "growth_2000_2025": 56.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6703,
    "longitude": 79.8449,
    "rank": 203,
    "population": 11829111,
    "growth_2000_2025": 46.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1231,
    "longitude": 77.6864,
    "rank": 204,
    "population": 22053557,
    "growth_2000_2025": 45.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3179,
    "longitude": 77.4889,
    "rank": 205,
    "population": 10521349,
    "growth_2000_2025": 57.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1889,
    "longitude": 79.968,
    "rank": 206,
    "population": 7828428,
    "growth_2000_2025": 45.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.461,
    "longitude": 79.8665,
    "rank": 207,
    "population": 10655495,
    "growth_2000_2025": 44.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1845,
    "longitude": 76.7459,
    "rank": 208,
    "population": 21484076,
    "growth_2000_2025": 46.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.429,
    "longitude": 80.4707,
    "rank": 209,
    "population": 12751528,
    "growth_2000_2025": 36.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4643,
    "longitude": 88.8525,
    "rank": 210,
    "population": 16439135,
    "growth_2000_2025": 12.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8711,
    "longitude": 78.9655,
    "rank": 211,
    "population": 12786562,
    "growth_2000_2025": 56.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7989,
    "longitude": 80.9709,
    "rank": 212,
    "population": 4169619,
    "growth_2000_2025": 47.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.317,
    "longitude": 72.1419,
    "rank": 213,
    "population": 10440584,
    "growth_2000_2025": 59.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3819,
    "longitude": 76.8746,
    "rank": 214,
    "population": 18414117,
    "growth_2000_2025": 42.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7534,
    "longitude": 77.5994,
    "rank": 215,
    "population": 22592286,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2625,
    "longitude": 76.0486,
    "rank": 216,
    "population": 5826264,
    "growth_2000_2025": 48.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0845,
    "longitude": 77.0188,
    "rank": 217,
    "population": 12864308,
    "growth_2000_2025": 42.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8877,
    "longitude": 72.5173,
    "rank": 218,
    "population": 5271009,
    "growth_2000_2025": 40.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2497,
    "longitude": 88.0022,
    "rank": 219,
    "population": 21538923,
    "growth_2000_2025": 10.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0202,
    "longitude": 78.5568,
    "rank": 220,
    "population": 8122081,
    "growth_2000_2025": 48.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.4059,
    "longitude": 73.6172,
    "rank": 221,
    "population": 10554845,
    "growth_2000_2025": 78.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3238,
    "longitude": 73.9584,
    "rank": 222,
    "population": 10739831,
    "growth_2000_2025": 63.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7199,
    "longitude": 78.5097,
    "rank": 223,
    "population": 13651356,
    "growth_2000_2025": 56.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7859,
    "longitude": 78.3168,
    "rank": 224,
    "population": 13388999,
    "growth_2000_2025": 46.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0352,
    "longitude": 73.0611,
    "rank": 225,
    "population": 19635318,
    "growth_2000_2025": 35.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5998,
    "longitude": 78.0723,
    "rank": 226,
    "population": 14983025,
    "growth_2000_2025": 59.0
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8999,
    "longitude": 75.468,
    "rank": 227,
    "population": 5349894,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7276,
    "longitude": 80.5618,
    "rank": 228,
    "population": 5138171,
    "growth_2000_2025": 38.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9122,
    "longitude": 76.0495,
    "rank": 229,
    "population": 2746503,
    "growth_2000_2025": 40.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6173,
    "longitude": 80.8813,
    "rank": 230,
    "population": 3809151,
    "growth_2000_2025": 50.7
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.9392,
    "longitude": 80.5906,
    "rank": 231,
    "population": 5351463,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1282,
    "longitude": 73.9408,
    "rank": 232,
    "population": 5802936,
    "growth_2000_2025": 77.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4566,
    "longitude": 73.1007,
    "rank": 233,
    "population": 22379084,
    "growth_2000_2025": 33.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1274,
    "longitude": 77.8991,
    "rank": 234,
    "population": 19037110,
    "growth_2000_2025": 70.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.085,
    "longitude": 80.5365,
    "rank": 235,
    "population": 2591358,
    "growth_2000_2025": 42.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8002,
    "longitude": 78.221,
    "rank": 236,
    "population": 6694362,
    "growth_2000_2025": 45.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9236,
    "longitude": 77.4575,
    "rank": 237,
    "population": 17900459,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9598,
    "longitude": 76.0775,
    "rank": 238,
    "population": 4870642,
    "growth_2000_2025": 46.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3519,
    "longitude": 75.7798,
    "rank": 239,
    "population": 5828555,
    "growth_2000_2025": 38.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7274,
    "longitude": 78.8324,
    "rank": 240,
    "population": 11796178,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7545,
    "longitude": 78.3888,
    "rank": 241,
    "population": 6435968,
    "growth_2000_2025": 49.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.95,
    "longitude": 72.3413,
    "rank": 242,
    "population": 9691959,
    "growth_2000_2025": 56.5
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3748,
    "longitude": 72.5941,
    "rank": 243,
    "population": 16822977,
    "growth_2000_2025": 34.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6196,
    "longitude": 76.0029,
    "rank": 244,
    "population": 4532458,
    "growth_2000_2025": 43.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7784,
    "longitude": 75.9008,
    "rank": 245,
    "population": 2381285,
    "growth_2000_2025": 40.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6665,
    "longitude": 73.3238,
    "rank": 246,
    "population": 14406852,
    "growth_2000_2025": 38.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5892,
    "longitude": 77.6703,
    "rank": 247,
    "population": 20082581,
    "growth_2000_2025": 36.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3265,
    "longitude": 78.7367,
    "rank": 248,
    "population": 6971703,
    "growth_2000_2025": 58.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0287,
    "longitude": 78.6994,
    "rank": 249,
    "population": 12963603,
    "growth_2000_2025": 54.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4993,
    "longitude": 77.4593,
    "rank": 250,
    "population": 12581150,
    "growth_2000_2025": 44.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0436,
    "longitude": 80.478,
    "rank": 251,
    "population": 2329358,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3922,
    "longitude": 77.3477,
    "rank": 252,
    "population": 25928152,
    "growth_2000_2025": 42.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5604,
    "longitude": 77.5264,
    "rank": 253,
    "population": 12893399,
    "growth_2000_2025": 40.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8381,
    "longitude": 78.0944,
    "rank": 254,
    "population": 12633331,
    "growth_2000_2025": 60.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3862,
    "longitude": 77.495,
    "rank": 255,
    "population": 16055743,
    "growth_2000_2025": 67.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8589,
    "longitude": 77.4801,
    "rank": 256,
    "population": 29634112,
    "growth_2000_2025": 48.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6456,
    "longitude": 88.8151,
    "rank": 257,
    "population": 17456979,
    "growth_2000_2025": 12.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.4067,
    "longitude": 73.4463,
    "rank": 258,
    "population": 5178392,
    "growth_2000_2025": 79.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5151,
    "longitude": 77.8032,
    "rank": 259,
    "population": 7397416,
    "growth_2000_2025": 77.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7634,
    "longitude": 78.0647,
    "rank": 260,
    "population": 6322702,
    "growth_2000_2025": 47.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5384,
    "longitude": 73.9418,
    "rank": 261,
    "population": 11066657,
    "growth_2000_2025": 66.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2372,
    "longitude": 73.25,
    "rank": 262,
    "population": 11533741,
    "growth_2000_2025": 31.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5875,
    "longitude": 88.5851,
    "rank": 263,
    "population": 15686436,
    "growth_2000_2025": 11.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.8951,
    "longitude": 72.6849,
    "rank": 264,
    "population": 29472124,
    "growth_2000_2025": 37.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1764,
    "longitude": 78.0412,
    "rank": 265,
    "population": 6135671,
    "growth_2000_2025": 43.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3346,
    "longitude": 88.5848,
    "rank": 266,
    "population": 7522269,
    "growth_2000_2025": 9.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6865,
    "longitude": 75.8077,
    "rank": 267,
    "population": 4121997,
    "growth_2000_2025": 41.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0646,
    "longitude": 72.3377,
    "rank": 268,
    "population": 6438253,
    "growth_2000_2025": 57.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2189,
    "longitude": 72.3446,
    "rank": 269,
    "population": 10746640,
    "growth_2000_2025": 41.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4992,
    "longitude": 87.907,
    "rank": 270,
    "population": 20976682,
    "growth_2000_2025": 10.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2999,
    "longitude": 78.3008,
    "rank": 271,
    "population": 10024038,
    "growth_2000_2025": 45.9
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4451,
    "longitude": 80.3683,
    "rank": 272,
    "population": 12572869,
    "growth_2000_2025": 40.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6039,
    "longitude": 76.2416,
    "rank": 273,
    "population": 4197414,
    "growth_2000_2025": 52.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2584,
    "longitude": 78.5826,
    "rank": 274,
    "population": 13196676,
    "growth_2000_2025": 48.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7698,
    "longitude": 80.0404,
    "rank": 275,
    "population": 9560790,
    "growth_2000_2025": 41.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8421,
    "longitude": 78.0885,
    "rank": 276,
    "population": 8308514,
    "growth_2000_2025": 51.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3137,
    "longitude": 78.9311,
    "rank": 277,
    "population": 10765524,
    "growth_2000_2025": 48.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7006,
    "longitude": 72.9377,
    "rank": 278,
    "population": 11011025,
    "growth_2000_2025": 54.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3646,
    "longitude": 73.4999,
    "rank": 279,
    "population": 6031797,
    "growth_2000_2025": 79.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2684,
    "longitude": 72.8796,
    "rank": 280,
    "population": 7376588,
    "growth_2000_2025": 44.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4974,
    "longitude": 72.9046,
    "rank": 281,
    "population": 23225345,
    "growth_2000_2025": 31.5
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.688,
    "longitude": 88.8549,
    "rank": 282,
    "population": 9919644,
    "growth_2000_2025": 12.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3857,
    "longitude": 77.9877,
    "rank": 283,
    "population": 14351130,
    "growth_2000_2025": 61.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3581,
    "longitude": 80.1631,
    "rank": 284,
    "population": 13731374,
    "growth_2000_2025": 44.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2679,
    "longitude": 72.3979,
    "rank": 285,
    "population": 18260896,
    "growth_2000_2025": 32.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2977,
    "longitude": 72.9308,
    "rank": 286,
    "population": 6041242,
    "growth_2000_2025": 48.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9972,
    "longitude": 76.8408,
    "rank": 287,
    "population": 21073497,
    "growth_2000_2025": 34.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.165,
    "longitude": 72.4164,
    "rank": 288,
    "population": 8413085,
    "growth_2000_2025": 41.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3229,
    "longitude": 73.6628,
    "rank": 289,
    "population": 6775116,
    "growth_2000_2025": 58.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3868,
    "longitude": 77.0912,
    "rank": 290,
    "population": 22018029,
    "growth_2000_2025": 45.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2025,
    "longitude": 72.1845,
    "rank": 291,
    "population": 6708886,
    "growth_2000_2025": 55.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0682,
    "longitude": 76.8214,
    "rank": 292,
    "population": 27125597,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.3866,
    "longitude": 81.3806,
    "rank": 293,
    "population": 3001315,
    "growth_2000_2025": 47.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.4335,
    "longitude": 75.5634,
    "rank": 294,
    "population": 2321347,
    "growth_2000_2025": 52.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.132,
    "longitude": 77.3308,
    "rank": 295,
    "population": 15690045,
    "growth_2000_2025": 34.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.8265,
    "longitude": 72.4541,
    "rank": 296,
    "population": 16547561,
    "growth_2000_2025": 28.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.7635,
    "longitude": 72.6475,
    "rank": 297,
    "population": 28312767,
    "growth_2000_2025": 29.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 23.0373,
    "longitude": 88.5737,
    "rank": 298,
    "population": 19671064,
    "growth_2000_2025": 10.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6438,
    "longitude": 77.1283,
    "rank": 299,
    "population": 17728898,
    "growth_2000_2025": 53.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7107,
    "longitude": 77.503,
    "rank": 300,
    "population": 9072814,
    "growth_2000_2025": 63.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6296,
    "longitude": 77.3849,
    "rank": 301,
    "population": 9776800,
    "growth_2000_2025": 52.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.288,
    "longitude": 77.0564,
    "rank": 302,
    "population": 14767754,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3646,
    "longitude": 80.174,
    "rank": 303,
    "population": 12097909,
    "growth_2000_2025": 34.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3593,
    "longitude": 72.0787,
    "rank": 304,
    "population": 10860675,
    "growth_2000_2025": 55.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6004,
    "longitude": 77.092,
    "rank": 305,
    "population": 15634776,
    "growth_2000_2025": 37.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2787,
    "longitude": 72.4166,
    "rank": 306,
    "population": 10072976,
    "growth_2000_2025": 60.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6919,
    "longitude": 88.5135,
    "rank": 307,
    "population": 18185034,
    "growth_2000_2025": 10.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0458,
    "longitude": 75.3589,
    "rank": 308,
    "population": 5480532,
    "growth_2000_2025": 47.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0572,
    "longitude": 80.6299,
    "rank": 309,
    "population": 5568632,
    "growth_2000_2025": 36.7
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6424,
    "longitude": 80.4973,
    "rank": 310,
    "population": 3627974,
    "growth_2000_2025": 40.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5657,
    "longitude": 81.3397,
    "rank": 311,
    "population": 5627386,
    "growth_2000_2025": 44.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.4347,
    "longitude": 75.4699,
    "rank": 312,
    "population": 2849089,
    "growth_2000_2025": 55.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5965,
    "longitude": 77.4481,
    "rank": 313,
    "population": 13609535,
    "growth_2000_2025": 59.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8209,
    "longitude": 78.8038,
    "rank": 314,
    "population": 6847426,
    "growth_2000_2025": 53.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3211,
    "longitude": 88.1303,
    "rank": 315,
    "population": 20853784,
    "growth_2000_2025": 13.0
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0268,
    "longitude": 75.8674,
    "rank": 316,
    "population": 5138472,
    "growth_2000_2025": 42.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8664,
    "longitude": 76.2654,
    "rank": 317,
    "population": 5204470,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8696,
    "longitude": 77.7076,
    "rank": 318,
    "population": 14536954,
    "growth_2000_2025": 34.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9285,
    "longitude": 76.1166,
    "rank": 319,
    "population": 3215472,
    "growth_2000_2025": 40.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5312,
    "longitude": 77.5157,
    "rank": 320,
    "population": 13919960,
    "growth_2000_2025": 66.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9046,
    "longitude": 72.7614,
    "rank": 321,
    "population": 16275696,
    "growth_2000_2025": 37.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9661,
    "longitude": 75.8056,
    "rank": 322,
    "population": 3036795,
    "growth_2000_2025": 43.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.2109,
    "longitude": 81.2489,
    "rank": 323,
    "population": 2203477,
    "growth_2000_2025": 37.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.6346,
    "longitude": 73.9839,
    "rank": 324,
    "population": 5735801,
    "growth_2000_2025": 72.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.288,
    "longitude": 77.7174,
    "rank": 325,
    "population": 12390216,
    "growth_2000_2025": 56.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5225,
    "longitude": 77.2915,
    "rank": 326,
    "population": 10664044,
    "growth_2000_2025": 72.9
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.5875,
    "longitude": 80.7331,
    "rank": 327,
    "population": 7988332,
    "growth_2000_2025": 42.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.9464,
    "longitude": 81.2413,
    "rank": 328,
    "population": 2253839,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7924,
    "longitude": 72.7563,
    "rank": 329,
    "population": 7190173,
    "growth_2000_2025": 55.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3319,
    "longitude": 73.0399,
    "rank": 330,
    "population": 24407306,
    "growth_2000_2025": 38.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.774,
    "longitude": 75.592,
    "rank": 331,
    "population": 4996407,
    "growth_2000_2025": 44.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2445,
    "longitude": 88.8318,
    "rank": 332,
    "population": 10797157,
    "growth_2000_2025": 10.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9006,
    "longitude": 75.5045,
    "rank": 333,
    "population": 5780635,
    "growth_2000_2025": 47.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3215,
    "longitude": 73.1377,
    "rank": 334,
    "population": 14974480,
    "growth_2000_2025": 28.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9791,
    "longitude": 72.0729,
    "rank": 335,
    "population": 11026191,
    "growth_2000_2025": 49.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.32,
    "longitude": 77.165,
    "rank": 336,
    "population": 15199342,
    "growth_2000_2025": 35.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.168,
    "longitude": 72.5874,
    "rank": 337,
    "population": 12473921,
    "growth_2000_2025": 52.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3096,
    "longitude": 77.681,
    "rank": 338,
    "population": 13613183,
    "growth_2000_2025": 48.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3775,
    "longitude": 78.1405,
    "rank": 339,
    "population": 8423618,
    "growth_2000_2025": 62.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1143,
    "longitude": 76.8933,
    "rank": 340,
    "population": 20517003,
    "growth_2000_2025": 47.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8515,
    "longitude": 75.5994,
    "rank": 341,
    "population": 5735948,
    "growth_2000_2025": 56.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1926,
    "longitude": 77.2049,
    "rank": 342,
    "population": 15456393,
    "growth_2000_2025": 63.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7054,
    "longitude": 73.3593,
    "rank": 343,
    "population": 7387932,
    "growth_2000_2025": 74.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0827,
    "longitude": 75.4892,
    "rank": 344,
    "population": 4062687,
    "growth_2000_2025": 49.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8739,
    "longitude": 80.0298,
    "rank": 345,
    "population": 9542176,
    "growth_2000_2025": 32.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.276,
    "longitude": 73.8359,
    "rank": 346,
    "population": 4859918,
    "growth_2000_2025": 61.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4238,
    "longitude": 88.6098,
    "rank": 347,
    "population": 16581595,
    "growth_2000_2025": 11.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.0788,
    "longitude": 88.2031,
    "rank": 348,
    "population": 15001572,
    "growth_2000_2025": 9.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.6398,
    "longitude": 73.6678,
    "rank": 349,
    "population": 8320085,
    "growth_2000_2025": 80.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1949,
    "longitude": 75.6264,
    "rank": 350,
    "population": 3975612,
    "growth_2000_2025": 44.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0094,
    "longitude": 72.1797,
    "rank": 351,
    "population": 6256985,
    "growth_2000_2025": 43.0
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0736,
    "longitude": 72.7501,
    "rank": 352,
    "population": 20624090,
    "growth_2000_2025": 37.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2952,
    "longitude": 87.965,
    "rank": 353,
    "population": 22302214,
    "growth_2000_2025": 10.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.4648,
    "longitude": 77.1061,
    "rank": 354,
    "population": 7337573,
    "growth_2000_2025": 78.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8388,
    "longitude": 77.3181,
    "rank": 355,
    "population": 20797022,
    "growth_2000_2025": 36.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6356,
    "longitude": 80.5872,
    "rank": 356,
    "population": 12667042,
    "growth_2000_2025": 38.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1984,
    "longitude": 76.852,
    "rank": 357,
    "population": 24897177,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8847,
    "longitude": 75.853,
    "rank": 358,
    "population": 2402384,
    "growth_2000_2025": 53.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6393,
    "longitude": 77.8808,
    "rank": 359,
    "population": 17381651,
    "growth_2000_2025": 55.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0776,
    "longitude": 78.2331,
    "rank": 360,
    "population": 12851708,
    "growth_2000_2025": 59.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5439,
    "longitude": 78.8736,
    "rank": 361,
    "population": 12269826,
    "growth_2000_2025": 51.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0299,
    "longitude": 80.613,
    "rank": 362,
    "population": 5749965,
    "growth_2000_2025": 32.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3073,
    "longitude": 78.0095,
    "rank": 363,
    "population": 10452530,
    "growth_2000_2025": 51.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7666,
    "longitude": 77.4601,
    "rank": 364,
    "population": 15430882,
    "growth_2000_2025": 65.5
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4809,
    "longitude": 88.0584,
    "rank": 365,
    "population": 8853959,
    "growth_2000_2025": 9.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7849,
    "longitude": 78.2156,
    "rank": 366,
    "population": 11824920,
    "growth_2000_2025": 54.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1331,
    "longitude": 76.9433,
    "rank": 367,
    "population": 23455559,
    "growth_2000_2025": 45.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1513,
    "longitude": 74.3131,
    "rank": 368,
    "population": 4539062,
    "growth_2000_2025": 58.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.5752,
    "longitude": 72.6253,
    "rank": 369,
    "population": 6103709,
    "growth_2000_2025": 51.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3702,
    "longitude": 88.675,
    "rank": 370,
    "population": 20253600,
    "growth_2000_2025": 9.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3472,
    "longitude": 78.8062,
    "rank": 371,
    "population": 15351387,
    "growth_2000_2025": 44.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.816,
    "longitude": 74.1294,
    "rank": 372,
    "population": 8889459,
    "growth_2000_2025": 70.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5033,
    "longitude": 77.0358,
    "rank": 373,
    "population": 21794267,
    "growth_2000_2025": 48.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.497,
    "longitude": 81.3127,
    "rank": 374,
    "population": 5615501,
    "growth_2000_2025": 39.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1642,
    "longitude": 80.7018,
    "rank": 375,
    "population": 2119254,
    "growth_2000_2025": 49.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2431,
    "longitude": 72.7564,
    "rank": 376,
    "population": 5355152,
    "growth_2000_2025": 51.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7736,
    "longitude": 76.8419,
    "rank": 377,
    "population": 16215635,
    "growth_2000_2025": 47.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3801,
    "longitude": 77.5574,
    "rank": 378,
    "population": 15374811,
    "growth_2000_2025": 42.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8882,
    "longitude": 88.8191,
    "rank": 379,
    "population": 22215890,
    "growth_2000_2025": 10.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1587,
    "longitude": 75.7294,
    "rank": 380,
    "population": 3309219,
    "growth_2000_2025": 52.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0089,
    "longitude": 78.8148,
    "rank": 381,
    "population": 16252319,
    "growth_2000_2025": 51.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9134,
    "longitude": 72.6136,
    "rank": 382,
    "population": 6089253,
    "growth_2000_2025": 46.8
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0756,
    "longitude": 81.4008,
    "rank": 383,
    "population": 3827778,
    "growth_2000_2025": 50.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.2106,
    "longitude": 77.1621,
    "rank": 384,
    "population": 27066363,
    "growth_2000_2025": 34.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 19.0091,
    "longitude": 73.8747,
    "rank": 385,
    "population": 9530179,
    "growth_2000_2025": 67.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9539,
    "longitude": 77.2391,
    "rank": 386,
    "population": 17852161,
    "growth_2000_2025": 70.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0178,
    "longitude": 80.5366,
    "rank": 387,
    "population": 6976726,
    "growth_2000_2025": 44.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0526,
    "longitude": 77.5492,
    "rank": 388,
    "population": 17312059,
    "growth_2000_2025": 56.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7028,
    "longitude": 80.687,
    "rank": 389,
    "population": 3784879,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2181,
    "longitude": 75.3782,
    "rank": 390,
    "population": 4913604,
    "growth_2000_2025": 42.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5408,
    "longitude": 73.7573,
    "rank": 391,
    "population": 4766801,
    "growth_2000_2025": 73.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2652,
    "longitude": 77.1282,
    "rank": 392,
    "population": 16144468,
    "growth_2000_2025": 66.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.4067,
    "longitude": 75.7913,
    "rank": 393,
    "population": 4714049,
    "growth_2000_2025": 41.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4498,
    "longitude": 78.1484,
    "rank": 394,
    "population": 16276906,
    "growth_2000_2025": 51.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6545,
    "longitude": 72.636,
    "rank": 395,
    "population": 25646920,
    "growth_2000_2025": 30.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1287,
    "longitude": 77.7055,
    "rank": 396,
    "population": 7877086,
    "growth_2000_2025": 64.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.3391,
    "longitude": 80.6692,
    "rank": 397,
    "population": 4194376,
    "growth_2000_2025": 53.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4589,
    "longitude": 72.8018,
    "rank": 398,
    "population": 20245539,
    "growth_2000_2025": 31.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.459,
    "longitude": 73.0198,
    "rank": 399,
    "population": 13197290,
    "growth_2000_2025": 34.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.12,
    "longitude": 76.2729,
    "rank": 400,
    "population": 2268885,
    "growth_2000_2025": 44.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 23.026,
    "longitude": 88.0977,
    "rank": 401,
    "population": 17821340,
    "growth_2000_2025": 12.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8472,
    "longitude": 72.9414,
    "rank": 402,
    "population": 7183541,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3903,
    "longitude": 76.8115,
    "rank": 403,
    "population": 28532357,
    "growth_2000_2025": 36.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4314,
    "longitude": 76.8499,
    "rank": 404,
    "population": 21620201,
    "growth_2000_2025": 47.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8142,
    "longitude": 88.3909,
    "rank": 405,
    "population": 13193238,
    "growth_2000_2025": 10.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.832,
    "longitude": 88.5777,
    "rank": 406,
    "population": 14849147,
    "growth_2000_2025": 11.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.728,
    "longitude": 77.8095,
    "rank": 407,
    "population": 8128935,
    "growth_2000_2025": 54.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4102,
    "longitude": 78.2653,
    "rank": 408,
    "population": 6806392,
    "growth_2000_2025": 59.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7043,
    "longitude": 72.1796,
    "rank": 409,
    "population": 8255626,
    "growth_2000_2025": 53.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8952,
    "longitude": 77.5207,
    "rank": 410,
    "population": 16023073,
    "growth_2000_2025": 61.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5919,
    "longitude": 73.4698,
    "rank": 411,
    "population": 10402633,
    "growth_2000_2025": 64.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.885,
    "longitude": 76.0947,
    "rank": 412,
    "population": 3006756,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1727,
    "longitude": 75.653,
    "rank": 413,
    "population": 5456171,
    "growth_2000_2025": 46.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9882,
    "longitude": 73.4209,
    "rank": 414,
    "population": 3771903,
    "growth_2000_2025": 82.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5657,
    "longitude": 73.5617,
    "rank": 415,
    "population": 7058419,
    "growth_2000_2025": 65.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8368,
    "longitude": 76.9245,
    "rank": 416,
    "population": 26363975,
    "growth_2000_2025": 38.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0122,
    "longitude": 77.231,
    "rank": 417,
    "population": 19123736,
    "growth_2000_2025": 75.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1277,
    "longitude": 72.4636,
    "rank": 418,
    "population": 5548535,
    "growth_2000_2025": 43.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4135,
    "longitude": 77.6438,
    "rank": 419,
    "population": 11060724,
    "growth_2000_2025": 47.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6038,
    "longitude": 75.8945,
    "rank": 420,
    "population": 2370379,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8091,
    "longitude": 78.3038,
    "rank": 421,
    "population": 11141022,
    "growth_2000_2025": 59.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1658,
    "longitude": 80.1776,
    "rank": 422,
    "population": 12446948,
    "growth_2000_2025": 35.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1213,
    "longitude": 72.38,
    "rank": 423,
    "population": 9101377,
    "growth_2000_2025": 53.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5893,
    "longitude": 74.1925,
    "rank": 424,
    "population": 9586313,
    "growth_2000_2025": 62.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4435,
    "longitude": 80.5105,
    "rank": 425,
    "population": 6644320,
    "growth_2000_2025": 44.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5692,
    "longitude": 73.8794,
    "rank": 426,
    "population": 10569250,
    "growth_2000_2025": 70.5
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8233,
    "longitude": 88.5638,
    "rank": 427,
    "population": 9450284,
    "growth_2000_2025": 10.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8007,
    "longitude": 73.9174,
    "rank": 428,
    "population": 6705563,
    "growth_2000_2025": 63.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.632,
    "longitude": 79.8343,
    "rank": 429,
    "population": 11805310,
    "growth_2000_2025": 33.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4153,
    "longitude": 72.4478,
    "rank": 430,
    "population": 4463425,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1943,
    "longitude": 88.5706,
    "rank": 431,
    "population": 17047880,
    "growth_2000_2025": 12.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9064,
    "longitude": 77.2361,
    "rank": 432,
    "population": 18145055,
    "growth_2000_2025": 58.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3753,
    "longitude": 75.3068,
    "rank": 433,
    "population": 2213941,
    "growth_2000_2025": 49.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2502,
    "longitude": 77.3184,
    "rank": 434,
    "population": 8845654,
    "growth_2000_2025": 60.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2233,
    "longitude": 88.6219,
    "rank": 435,
    "population": 21100208,
    "growth_2000_2025": 10.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6814,
    "longitude": 88.8162,
    "rank": 436,
    "population": 9504159,
    "growth_2000_2025": 12.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4575,
    "longitude": 72.5652,
    "rank": 437,
    "population": 25368791,
    "growth_2000_2025": 33.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1997,
    "longitude": 73.0039,
    "rank": 438,
    "population": 12646657,
    "growth_2000_2025": 47.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5609,
    "longitude": 80.4685,
    "rank": 439,
    "population": 2015401,
    "growth_2000_2025": 41.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.818,
    "longitude": 80.6371,
    "rank": 440,
    "population": 13741903,
    "growth_2000_2025": 37.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6138,
    "longitude": 77.5924,
    "rank": 441,
    "population": 22955174,
    "growth_2000_2025": 48.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9103,
    "longitude": 87.9818,
    "rank": 442,
    "population": 20669000,
    "growth_2000_2025": 10.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7021,
    "longitude": 78.9471,
    "rank": 443,
    "population": 9004313,
    "growth_2000_2025": 44.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1679,
    "longitude": 77.1902,
    "rank": 444,
    "population": 20923343,
    "growth_2000_2025": 36.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4617,
    "longitude": 72.4867,
    "rank": 445,
    "population": 22155895,
    "growth_2000_2025": 36.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7272,
    "longitude": 78.5525,
    "rank": 446,
    "population": 10674951,
    "growth_2000_2025": 62.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6572,
    "longitude": 72.1294,
    "rank": 447,
    "population": 5549282,
    "growth_2000_2025": 47.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7851,
    "longitude": 74.2122,
    "rank": 448,
    "population": 8960478,
    "growth_2000_2025": 68.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 23.0174,
    "longitude": 88.5974,
    "rank": 449,
    "population": 17695870,
    "growth_2000_2025": 11.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7649,
    "longitude": 72.5092,
    "rank": 450,
    "population": 4322163,
    "growth_2000_2025": 48.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2503,
    "longitude": 88.3409,
    "rank": 451,
    "population": 18747531,
    "growth_2000_2025": 12.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.4202,
    "longitude": 75.7307,
    "rank": 452,
    "population": 4293435,
    "growth_2000_2025": 50.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.6438,
    "longitude": 74.1752,
    "rank": 453,
    "population": 5309142,
    "growth_2000_2025": 83.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5043,
    "longitude": 73.5365,
    "rank": 454,
    "population": 7161290,
    "growth_2000_2025": 73.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7665,
    "longitude": 78.5007,
    "rank": 455,
    "population": 14308199,
    "growth_2000_2025": 49.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8835,
    "longitude": 72.0968,
    "rank": 456,
    "population": 9725275,
    "growth_2000_2025": 48.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5866,
    "longitude": 87.9951,
    "rank": 457,
    "population": 17277316,
    "growth_2000_2025": 9.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 23.0336,
    "longitude": 88.7695,
    "rank": 458,
    "population": 19610139,
    "growth_2000_2025": 9.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6723,
    "longitude": 72.4303,
    "rank": 459,
    "population": 29506415,
    "growth_2000_2025": 32.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1864,
    "longitude": 73.794,
    "rank": 460,
    "population": 8777419,
    "growth_2000_2025": 68.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8261,
    "longitude": 88.5799,
    "rank": 461,
    "population": 21803454,
    "growth_2000_2025": 10.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3044,
    "longitude": 77.1544,
    "rank": 462,
    "population": 15892208,
    "growth_2000_2025": 37.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.0589,
    "longitude": 73.6716,
    "rank": 463,
    "population": 6056766,
    "growth_2000_2025": 84.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6169,
    "longitude": 77.3748,
    "rank": 464,
    "population": 10913563,
    "growth_2000_2025": 47.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6524,
    "longitude": 72.7792,
    "rank": 465,
    "population": 10536690,
    "growth_2000_2025": 47.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6199,
    "longitude": 73.0162,
    "rank": 466,
    "population": 7583995,
    "growth_2000_2025": 49.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8084,
    "longitude": 77.2392,
    "rank": 467,
    "population": 9598542,
    "growth_2000_2025": 68.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8285,
    "longitude": 77.4254,
    "rank": 468,
    "population": 8720187,
    "growth_2000_2025": 61.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9669,
    "longitude": 77.1866,
    "rank": 469,
    "population": 17748755,
    "growth_2000_2025": 46.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1212,
    "longitude": 72.1739,
    "rank": 470,
    "population": 4605589,
    "growth_2000_2025": 41.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2971,
    "longitude": 77.8529,
    "rank": 471,
    "population": 17650084,
    "growth_2000_2025": 59.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2777,
    "longitude": 75.4637,
    "rank": 472,
    "population": 3064856,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6799,
    "longitude": 88.8628,
    "rank": 473,
    "population": 18454480,
    "growth_2000_2025": 11.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8526,
    "longitude": 72.8067,
    "rank": 474,
    "population": 10433754,
    "growth_2000_2025": 53.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5292,
    "longitude": 76.8536,
    "rank": 475,
    "population": 18847494,
    "growth_2000_2025": 47.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9787,
    "longitude": 72.2802,
    "rank": 476,
    "population": 10509545,
    "growth_2000_2025": 55.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7402,
    "longitude": 77.9427,
    "rank": 477,
    "population": 11596158,
    "growth_2000_2025": 58.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0366,
    "longitude": 77.138,
    "rank": 478,
    "population": 21057513,
    "growth_2000_2025": 35.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4668,
    "longitude": 79.9647,
    "rank": 479,
    "population": 13610217,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5935,
    "longitude": 73.5005,
    "rank": 480,
    "population": 5337133,
    "growth_2000_2025": 77.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1095,
    "longitude": 81.352,
    "rank": 481,
    "population": 4891933,
    "growth_2000_2025": 37.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7776,
    "longitude": 77.4528,
    "rank": 482,
    "population": 14919129,
    "growth_2000_2025": 44.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1342,
    "longitude": 88.2024,
    "rank": 483,
    "population": 13402247,
    "growth_2000_2025": 13.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8259,
    "longitude": 74.2656,
    "rank": 484,
    "population": 5197283,
    "growth_2000_2025": 62.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3914,
    "longitude": 80.2795,
    "rank": 485,
    "population": 13475197,
    "growth_2000_2025": 44.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3897,
    "longitude": 78.5025,
    "rank": 486,
    "population": 12644319,
    "growth_2000_2025": 57.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.578,
    "longitude": 88.6373,
    "rank": 487,
    "population": 13695181,
    "growth_2000_2025": 9.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1421,
    "longitude": 78.4131,
    "rank": 488,
    "population": 10192450,
    "growth_2000_2025": 63.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8148,
    "longitude": 73.888,
    "rank": 489,
    "population": 6096237,
    "growth_2000_2025": 77.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7139,
    "longitude": 78.6605,
    "rank": 490,
    "population": 9616174,
    "growth_2000_2025": 51.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.058,
    "longitude": 75.4063,
    "rank": 491,
    "population": 2355395,
    "growth_2000_2025": 44.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.871,
    "longitude": 80.5015,
    "rank": 492,
    "population": 13590219,
    "growth_2000_2025": 32.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3525,
    "longitude": 73.8148,
    "rank": 493,
    "population": 9822082,
    "growth_2000_2025": 80.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2772,
    "longitude": 80.3012,
    "rank": 494,
    "population": 11867258,
    "growth_2000_2025": 42.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0677,
    "longitude": 78.3092,
    "rank": 495,
    "population": 8058284,
    "growth_2000_2025": 49.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.283,
    "longitude": 81.0943,
    "rank": 496,
    "population": 4177169,
    "growth_2000_2025": 43.0
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0975,
    "longitude": 75.3941,
    "rank": 497,
    "population": 4826389,
    "growth_2000_2025": 40.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 16.9546,
    "longitude": 78.9355,
    "rank": 498,
    "population": 11336277,
    "growth_2000_2025": 57.0
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.5295,
    "longitude": 72.5068,
    "rank": 499,
    "population": 23567183,
    "growth_2000_2025": 35.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6767,
    "longitude": 77.7397,
    "rank": 500,
    "population": 9749579,
    "growth_2000_2025": 61.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7367,
    "longitude": 77.2255,
    "rank": 501,
    "population": 25335022,
    "growth_2000_2025": 41.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3965,
    "longitude": 75.4142,
    "rank": 502,
    "population": 4374887,
    "growth_2000_2025": 40.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8895,
    "longitude": 77.3954,
    "rank": 503,
    "population": 28783298,
    "growth_2000_2025": 47.0
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1634,
    "longitude": 72.9583,
    "rank": 504,
    "population": 22499779,
    "growth_2000_2025": 30.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0616,
    "longitude": 80.9886,
    "rank": 505,
    "population": 2385370,
    "growth_2000_2025": 50.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9265,
    "longitude": 72.3752,
    "rank": 506,
    "population": 12296744,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1555,
    "longitude": 88.7343,
    "rank": 507,
    "population": 13964235,
    "growth_2000_2025": 10.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0202,
    "longitude": 80.5507,
    "rank": 508,
    "population": 4194855,
    "growth_2000_2025": 49.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7816,
    "longitude": 72.1072,
    "rank": 509,
    "population": 12586592,
    "growth_2000_2025": 56.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1329,
    "longitude": 74.1384,
    "rank": 510,
    "population": 7407091,
    "growth_2000_2025": 82.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2839,
    "longitude": 80.7561,
    "rank": 511,
    "population": 7006954,
    "growth_2000_2025": 33.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6323,
    "longitude": 72.9919,
    "rank": 512,
    "population": 11234922,
    "growth_2000_2025": 40.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0144,
    "longitude": 80.5096,
    "rank": 513,
    "population": 3573366,
    "growth_2000_2025": 53.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1409,
    "longitude": 73.709,
    "rank": 514,
    "population": 9816392,
    "growth_2000_2025": 57.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.163,
    "longitude": 73.6089,
    "rank": 515,
    "population": 10540940,
    "growth_2000_2025": 71.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9311,
    "longitude": 88.8259,
    "rank": 516,
    "population": 20350325,
    "growth_2000_2025": 11.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2997,
    "longitude": 74.3263,
    "rank": 517,
    "population": 10732515,
    "growth_2000_2025": 80.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7705,
    "longitude": 73.9645,
    "rank": 518,
    "population": 7462476,
    "growth_2000_2025": 71.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2475,
    "longitude": 88.8553,
    "rank": 519,
    "population": 15828333,
    "growth_2000_2025": 11.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.848,
    "longitude": 78.604,
    "rank": 520,
    "population": 14880470,
    "growth_2000_2025": 53.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2627,
    "longitude": 75.6417,
    "rank": 521,
    "population": 5770953,
    "growth_2000_2025": 44.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1507,
    "longitude": 77.4661,
    "rank": 522,
    "population": 16541732,
    "growth_2000_2025": 62.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9454,
    "longitude": 88.4367,
    "rank": 523,
    "population": 10497638,
    "growth_2000_2025": 9.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3381,
    "longitude": 79.8724,
    "rank": 524,
    "population": 6945836,
    "growth_2000_2025": 44.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2729,
    "longitude": 77.3799,
    "rank": 525,
    "population": 18158958,
    "growth_2000_2025": 74.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7594,
    "longitude": 80.9965,
    "rank": 526,
    "population": 2999024,
    "growth_2000_2025": 43.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.645,
    "longitude": 72.4003,
    "rank": 527,
    "population": 16627332,
    "growth_2000_2025": 29.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0141,
    "longitude": 72.348,
    "rank": 528,
    "population": 8490921,
    "growth_2000_2025": 52.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6473,
    "longitude": 77.3135,
    "rank": 529,
    "population": 17472112,
    "growth_2000_2025": 39.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.194,
    "longitude": 78.4709,
    "rank": 530,
    "population": 12258678,
    "growth_2000_2025": 63.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4999,
    "longitude": 73.1648,
    "rank": 531,
    "population": 12542314,
    "growth_2000_2025": 28.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2832,
    "longitude": 75.9272,
    "rank": 532,
    "population": 4249419,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.5624,
    "longitude": 72.9815,
    "rank": 533,
    "population": 27533303,
    "growth_2000_2025": 26.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1477,
    "longitude": 77.6684,
    "rank": 534,
    "population": 15154876,
    "growth_2000_2025": 70.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2455,
    "longitude": 78.888,
    "rank": 535,
    "population": 13538223,
    "growth_2000_2025": 57.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0028,
    "longitude": 76.9403,
    "rank": 536,
    "population": 18765692,
    "growth_2000_2025": 36.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3895,
    "longitude": 80.1913,
    "rank": 537,
    "population": 12595194,
    "growth_2000_2025": 43.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6125,
    "longitude": 77.1613,
    "rank": 538,
    "population": 17055765,
    "growth_2000_2025": 43.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.248,
    "longitude": 78.5515,
    "rank": 539,
    "population": 12716226,
    "growth_2000_2025": 63.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6487,
    "longitude": 76.0356,
    "rank": 540,
    "population": 3805288,
    "growth_2000_2025": 52.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8828,
    "longitude": 78.6045,
    "rank": 541,
    "population": 6693461,
    "growth_2000_2025": 53.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2153,
    "longitude": 72.9712,
    "rank": 542,
    "population": 6781291,
    "growth_2000_2025": 56.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4094,
    "longitude": 88.0531,
    "rank": 543,
    "population": 18489986,
    "growth_2000_2025": 11.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.5836,
    "longitude": 79.9589,
    "rank": 544,
    "population": 7785393,
    "growth_2000_2025": 46.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.2599,
    "longitude": 77.5315,
    "rank": 545,
    "population": 25286528,
    "growth_2000_2025": 38.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2311,
    "longitude": 78.6919,
    "rank": 546,
    "population": 11845740,
    "growth_2000_2025": 61.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4015,
    "longitude": 80.0988,
    "rank": 547,
    "population": 4918653,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9554,
    "longitude": 77.5422,
    "rank": 548,
    "population": 9430179,
    "growth_2000_2025": 64.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3567,
    "longitude": 78.4963,
    "rank": 549,
    "population": 10647119,
    "growth_2000_2025": 53.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7471,
    "longitude": 88.8448,
    "rank": 550,
    "population": 17087809,
    "growth_2000_2025": 9.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3433,
    "longitude": 72.1428,
    "rank": 551,
    "population": 5549278,
    "growth_2000_2025": 50.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0986,
    "longitude": 77.1926,
    "rank": 552,
    "population": 15399686,
    "growth_2000_2025": 56.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8871,
    "longitude": 80.6383,
    "rank": 553,
    "population": 12678920,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8174,
    "longitude": 79.8213,
    "rank": 554,
    "population": 9714745,
    "growth_2000_2025": 38.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4406,
    "longitude": 77.2174,
    "rank": 555,
    "population": 27592303,
    "growth_2000_2025": 34.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5035,
    "longitude": 81.3965,
    "rank": 556,
    "population": 4033177,
    "growth_2000_2025": 38.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1887,
    "longitude": 75.4926,
    "rank": 557,
    "population": 3535560,
    "growth_2000_2025": 55.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8644,
    "longitude": 78.8945,
    "rank": 558,
    "population": 11627210,
    "growth_2000_2025": 63.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1037,
    "longitude": 80.2937,
    "rank": 559,
    "population": 4981363,
    "growth_2000_2025": 45.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3566,
    "longitude": 78.7097,
    "rank": 560,
    "population": 13229505,
    "growth_2000_2025": 45.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5156,
    "longitude": 73.8742,
    "rank": 561,
    "population": 4505582,
    "growth_2000_2025": 67.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7861,
    "longitude": 80.5569,
    "rank": 562,
    "population": 5198388,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8012,
    "longitude": 79.9731,
    "rank": 563,
    "population": 9250848,
    "growth_2000_2025": 41.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1246,
    "longitude": 80.8976,
    "rank": 564,
    "population": 2979719,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.5014,
    "longitude": 72.6693,
    "rank": 565,
    "population": 10748697,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.898,
    "longitude": 88.747,
    "rank": 566,
    "population": 21874850,
    "growth_2000_2025": 12.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.644,
    "longitude": 78.571,
    "rank": 567,
    "population": 12876303,
    "growth_2000_2025": 49.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4332,
    "longitude": 88.7805,
    "rank": 568,
    "population": 20787394,
    "growth_2000_2025": 12.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.5928,
    "longitude": 80.3219,
    "rank": 569,
    "population": 6492054,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9073,
    "longitude": 72.7127,
    "rank": 570,
    "population": 16810687,
    "growth_2000_2025": 36.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.6468,
    "longitude": 78.8061,
    "rank": 571,
    "population": 9302256,
    "growth_2000_2025": 55.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2848,
    "longitude": 88.4226,
    "rank": 572,
    "population": 13136505,
    "growth_2000_2025": 13.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.691,
    "longitude": 72.5667,
    "rank": 573,
    "population": 16659143,
    "growth_2000_2025": 29.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.911,
    "longitude": 77.3869,
    "rank": 574,
    "population": 7821129,
    "growth_2000_2025": 61.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1308,
    "longitude": 78.0567,
    "rank": 575,
    "population": 13908079,
    "growth_2000_2025": 63.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.4102,
    "longitude": 75.297,
    "rank": 576,
    "population": 3881609,
    "growth_2000_2025": 50.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5558,
    "longitude": 73.5334,
    "rank": 577,
    "population": 6002249,
    "growth_2000_2025": 57.2
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.12,
    "longitude": 72.5125,
    "rank": 578,
    "population": 11670815,
    "growth_2000_2025": 41.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5143,
    "longitude": 77.6044,
    "rank": 579,
    "population": 21463339,
    "growth_2000_2025": 39.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0133,
    "longitude": 77.7179,
    "rank": 580,
    "population": 14016027,
    "growth_2000_2025": 70.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.555,
    "longitude": 72.092,
    "rank": 581,
    "population": 10247814,
    "growth_2000_2025": 58.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7087,
    "longitude": 75.6033,
    "rank": 582,
    "population": 4915195,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3929,
    "longitude": 75.3139,
    "rank": 583,
    "population": 3935222,
    "growth_2000_2025": 49.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1997,
    "longitude": 77.9837,
    "rank": 584,
    "population": 18851633,
    "growth_2000_2025": 57.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0724,
    "longitude": 80.7171,
    "rank": 585,
    "population": 2758651,
    "growth_2000_2025": 49.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1936,
    "longitude": 72.3439,
    "rank": 586,
    "population": 4635324,
    "growth_2000_2025": 53.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7396,
    "longitude": 77.64,
    "rank": 587,
    "population": 13544964,
    "growth_2000_2025": 63.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2584,
    "longitude": 73.8571,
    "rank": 588,
    "population": 10960976,
    "growth_2000_2025": 64.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.526,
    "longitude": 77.4824,
    "rank": 589,
    "population": 17874761,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0766,
    "longitude": 81.2137,
    "rank": 590,
    "population": 3147642,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2945,
    "longitude": 80.3654,
    "rank": 591,
    "population": 5574277,
    "growth_2000_2025": 33.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6563,
    "longitude": 81.2538,
    "rank": 592,
    "population": 2061730,
    "growth_2000_2025": 53.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6516,
    "longitude": 88.4325,
    "rank": 593,
    "population": 10309728,
    "growth_2000_2025": 12.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.427,
    "longitude": 77.5056,
    "rank": 594,
    "population": 25058404,
    "growth_2000_2025": 38.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8606,
    "longitude": 78.5991,
    "rank": 595,
    "population": 10333061,
    "growth_2000_2025": 47.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7843,
    "longitude": 77.335,
    "rank": 596,
    "population": 24398359,
    "growth_2000_2025": 48.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.755,
    "longitude": 78.4827,
    "rank": 597,
    "population": 11989352,
    "growth_2000_2025": 59.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9592,
    "longitude": 77.2247,
    "rank": 598,
    "population": 16422465,
    "growth_2000_2025": 57.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4738,
    "longitude": 77.3582,
    "rank": 599,
    "population": 26211022,
    "growth_2000_2025": 38.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3254,
    "longitude": 80.4932,
    "rank": 600,
    "population": 5625611,
    "growth_2000_2025": 40.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.9176,
    "longitude": 80.7429,
    "rank": 601,
    "population": 2435692,
    "growth_2000_2025": 52.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8679,
    "longitude": 77.2665,
    "rank": 602,
    "population": 11789333,
    "growth_2000_2025": 54.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7527,
    "longitude": 73.6225,
    "rank": 603,
    "population": 5341928,
    "growth_2000_2025": 72.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3279,
    "longitude": 80.4437,
    "rank": 604,
    "population": 8323232,
    "growth_2000_2025": 40.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7898,
    "longitude": 73.8075,
    "rank": 605,
    "population": 5486972,
    "growth_2000_2025": 83.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6805,
    "longitude": 80.4875,
    "rank": 606,
    "population": 4572354,
    "growth_2000_2025": 38.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4543,
    "longitude": 77.5938,
    "rank": 607,
    "population": 19683555,
    "growth_2000_2025": 33.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3273,
    "longitude": 76.2188,
    "rank": 608,
    "population": 2400780,
    "growth_2000_2025": 50.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9482,
    "longitude": 73.5893,
    "rank": 609,
    "population": 8781823,
    "growth_2000_2025": 68.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9366,
    "longitude": 77.7675,
    "rank": 610,
    "population": 14232335,
    "growth_2000_2025": 73.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1512,
    "longitude": 80.6018,
    "rank": 611,
    "population": 3644203,
    "growth_2000_2025": 47.7
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1721,
    "longitude": 80.649,
    "rank": 612,
    "population": 5584613,
    "growth_2000_2025": 53.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5273,
    "longitude": 76.2395,
    "rank": 613,
    "population": 5576094,
    "growth_2000_2025": 46.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9335,
    "longitude": 74.1097,
    "rank": 614,
    "population": 6873438,
    "growth_2000_2025": 78.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4255,
    "longitude": 80.4675,
    "rank": 615,
    "population": 9279440,
    "growth_2000_2025": 43.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1672,
    "longitude": 73.6725,
    "rank": 616,
    "population": 9323598,
    "growth_2000_2025": 68.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.5502,
    "longitude": 73.2605,
    "rank": 617,
    "population": 14836324,
    "growth_2000_2025": 36.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2967,
    "longitude": 79.9164,
    "rank": 618,
    "population": 9548588,
    "growth_2000_2025": 33.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.418,
    "longitude": 78.4865,
    "rank": 619,
    "population": 15153277,
    "growth_2000_2025": 51.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9029,
    "longitude": 72.5024,
    "rank": 620,
    "population": 7413802,
    "growth_2000_2025": 40.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.5382,
    "longitude": 79.8794,
    "rank": 621,
    "population": 7525773,
    "growth_2000_2025": 39.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2195,
    "longitude": 73.3001,
    "rank": 622,
    "population": 27915962,
    "growth_2000_2025": 30.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.183,
    "longitude": 72.9745,
    "rank": 623,
    "population": 5936660,
    "growth_2000_2025": 46.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9954,
    "longitude": 88.1037,
    "rank": 624,
    "population": 7753790,
    "growth_2000_2025": 10.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1274,
    "longitude": 76.7168,
    "rank": 625,
    "population": 27772240,
    "growth_2000_2025": 40.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.389,
    "longitude": 73.3551,
    "rank": 626,
    "population": 21489546,
    "growth_2000_2025": 35.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0354,
    "longitude": 79.9824,
    "rank": 627,
    "population": 11129707,
    "growth_2000_2025": 35.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.4715,
    "longitude": 80.6871,
    "rank": 628,
    "population": 2923027,
    "growth_2000_2025": 40.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6093,
    "longitude": 77.9474,
    "rank": 629,
    "population": 11692220,
    "growth_2000_2025": 75.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9078,
    "longitude": 87.9601,
    "rank": 630,
    "population": 20354725,
    "growth_2000_2025": 12.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0887,
    "longitude": 78.838,
    "rank": 631,
    "population": 11160754,
    "growth_2000_2025": 63.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1276,
    "longitude": 77.6091,
    "rank": 632,
    "population": 16338211,
    "growth_2000_2025": 52.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6057,
    "longitude": 72.6525,
    "rank": 633,
    "population": 17008819,
    "growth_2000_2025": 38.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1966,
    "longitude": 77.8667,
    "rank": 634,
    "population": 6947904,
    "growth_2000_2025": 58.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6298,
    "longitude": 80.7091,
    "rank": 635,
    "population": 8773845,
    "growth_2000_2025": 36.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7456,
    "longitude": 78.8763,
    "rank": 636,
    "population": 7636772,
    "growth_2000_2025": 54.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9763,
    "longitude": 76.2728,
    "rank": 637,
    "population": 4455235,
    "growth_2000_2025": 39.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7203,
    "longitude": 87.9252,
    "rank": 638,
    "population": 21098096,
    "growth_2000_2025": 11.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3434,
    "longitude": 78.8717,
    "rank": 639,
    "population": 11166159,
    "growth_2000_2025": 46.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2147,
    "longitude": 88.521,
    "rank": 640,
    "population": 17539353,
    "growth_2000_2025": 10.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9621,
    "longitude": 76.7444,
    "rank": 641,
    "population": 21668277,
    "growth_2000_2025": 44.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2539,
    "longitude": 79.9936,
    "rank": 642,
    "population": 9069667,
    "growth_2000_2025": 35.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.6914,
    "longitude": 74.1633,
    "rank": 643,
    "population": 10594936,
    "growth_2000_2025": 64.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3629,
    "longitude": 77.3334,
    "rank": 644,
    "population": 29462891,
    "growth_2000_2025": 48.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3542,
    "longitude": 88.2044,
    "rank": 645,
    "population": 7665409,
    "growth_2000_2025": 12.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3411,
    "longitude": 80.49,
    "rank": 646,
    "population": 7205154,
    "growth_2000_2025": 32.8
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0663,
    "longitude": 81.4153,
    "rank": 647,
    "population": 5137349,
    "growth_2000_2025": 46.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.8343,
    "longitude": 73.2126,
    "rank": 648,
    "population": 23491801,
    "growth_2000_2025": 33.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7835,
    "longitude": 81.3475,
    "rank": 649,
    "population": 5066964,
    "growth_2000_2025": 36.8
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1429,
    "longitude": 80.7816,
    "rank": 650,
    "population": 2026364,
    "growth_2000_2025": 48.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.1151,
    "longitude": 73.6283,
    "rank": 651,
    "population": 9360651,
    "growth_2000_2025": 67.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8734,
    "longitude": 77.1206,
    "rank": 652,
    "population": 13255793,
    "growth_2000_2025": 37.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.252,
    "longitude": 72.8689,
    "rank": 653,
    "population": 24857993,
    "growth_2000_2025": 35.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6353,
    "longitude": 72.6098,
    "rank": 654,
    "population": 4273788,
    "growth_2000_2025": 49.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6128,
    "longitude": 72.5831,
    "rank": 655,
    "population": 11371361,
    "growth_2000_2025": 41.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5073,
    "longitude": 73.7402,
    "rank": 656,
    "population": 6172408,
    "growth_2000_2025": 83.5
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8572,
    "longitude": 72.7649,
    "rank": 657,
    "population": 5756699,
    "growth_2000_2025": 49.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.6284,
    "longitude": 78.8143,
    "rank": 658,
    "population": 12068309,
    "growth_2000_2025": 58.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1296,
    "longitude": 73.3562,
    "rank": 659,
    "population": 15645915,
    "growth_2000_2025": 33.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.6426,
    "longitude": 78.6661,
    "rank": 660,
    "population": 6091604,
    "growth_2000_2025": 47.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6647,
    "longitude": 76.7754,
    "rank": 661,
    "population": 14728509,
    "growth_2000_2025": 36.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.878,
    "longitude": 80.6391,
    "rank": 662,
    "population": 10954952,
    "growth_2000_2025": 38.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.301,
    "longitude": 72.7303,
    "rank": 663,
    "population": 26451580,
    "growth_2000_2025": 30.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4154,
    "longitude": 77.3504,
    "rank": 664,
    "population": 15004441,
    "growth_2000_2025": 49.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.9234,
    "longitude": 79.7997,
    "rank": 665,
    "population": 6571995,
    "growth_2000_2025": 35.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1205,
    "longitude": 75.4535,
    "rank": 666,
    "population": 2342104,
    "growth_2000_2025": 51.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3706,
    "longitude": 72.9802,
    "rank": 667,
    "population": 15635932,
    "growth_2000_2025": 33.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2319,
    "longitude": 77.2334,
    "rank": 668,
    "population": 8296208,
    "growth_2000_2025": 61.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1635,
    "longitude": 88.291,
    "rank": 669,
    "population": 8216743,
    "growth_2000_2025": 9.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8459,
    "longitude": 72.1369,
    "rank": 670,
    "population": 11859980,
    "growth_2000_2025": 59.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9151,
    "longitude": 72.4524,
    "rank": 671,
    "population": 10406434,
    "growth_2000_2025": 41.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5008,
    "longitude": 88.2864,
    "rank": 672,
    "population": 18812435,
    "growth_2000_2025": 11.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2939,
    "longitude": 79.8386,
    "rank": 673,
    "population": 12996682,
    "growth_2000_2025": 32.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5392,
    "longitude": 78.2507,
    "rank": 674,
    "population": 6779763,
    "growth_2000_2025": 61.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.392,
    "longitude": 75.7085,
    "rank": 675,
    "population": 2321129,
    "growth_2000_2025": 51.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8731,
    "longitude": 78.0036,
    "rank": 676,
    "population": 7200048,
    "growth_2000_2025": 65.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3464,
    "longitude": 88.4273,
    "rank": 677,
    "population": 7457917,
    "growth_2000_2025": 9.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9466,
    "longitude": 72.378,
    "rank": 678,
    "population": 14607495,
    "growth_2000_2025": 37.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5967,
    "longitude": 78.0055,
    "rank": 679,
    "population": 11947211,
    "growth_2000_2025": 56.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6023,
    "longitude": 80.7394,
    "rank": 680,
    "population": 5638067,
    "growth_2000_2025": 38.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3119,
    "longitude": 76.9228,
    "rank": 681,
    "population": 17265554,
    "growth_2000_2025": 37.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8283,
    "longitude": 73.9076,
    "rank": 682,
    "population": 8750544,
    "growth_2000_2025": 61.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7355,
    "longitude": 78.0129,
    "rank": 683,
    "population": 12477363,
    "growth_2000_2025": 47.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1588,
    "longitude": 76.9968,
    "rank": 684,
    "population": 18548018,
    "growth_2000_2025": 43.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.5081,
    "longitude": 72.0871,
    "rank": 685,
    "population": 5770243,
    "growth_2000_2025": 52.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2063,
    "longitude": 73.3976,
    "rank": 686,
    "population": 9119595,
    "growth_2000_2025": 76.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7068,
    "longitude": 73.8544,
    "rank": 687,
    "population": 8574610,
    "growth_2000_2025": 63.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7927,
    "longitude": 80.5988,
    "rank": 688,
    "population": 5110312,
    "growth_2000_2025": 42.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6562,
    "longitude": 77.3493,
    "rank": 689,
    "population": 24606576,
    "growth_2000_2025": 38.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5383,
    "longitude": 75.9178,
    "rank": 690,
    "population": 2341552,
    "growth_2000_2025": 49.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3359,
    "longitude": 76.2103,
    "rank": 691,
    "population": 2610368,
    "growth_2000_2025": 39.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.552,
    "longitude": 74.2296,
    "rank": 692,
    "population": 6720959,
    "growth_2000_2025": 71.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7899,
    "longitude": 80.0476,
    "rank": 693,
    "population": 12272218,
    "growth_2000_2025": 46.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7755,
    "longitude": 76.1044,
    "rank": 694,
    "population": 4450313,
    "growth_2000_2025": 50.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6069,
    "longitude": 77.5459,
    "rank": 695,
    "population": 22383886,
    "growth_2000_2025": 39.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.7964,
    "longitude": 73.0262,
    "rank": 696,
    "population": 26366501,
    "growth_2000_2025": 34.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5877,
    "longitude": 80.5096,
    "rank": 697,
    "population": 5301524,
    "growth_2000_2025": 38.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8441,
    "longitude": 77.0977,
    "rank": 698,
    "population": 18788956,
    "growth_2000_2025": 73.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2217,
    "longitude": 72.241,
    "rank": 699,
    "population": 10300660,
    "growth_2000_2025": 58.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.4406,
    "longitude": 74.3502,
    "rank": 700,
    "population": 10196673,
    "growth_2000_2025": 83.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9309,
    "longitude": 72.8667,
    "rank": 701,
    "population": 7448714,
    "growth_2000_2025": 45.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1961,
    "longitude": 78.7706,
    "rank": 702,
    "population": 11148133,
    "growth_2000_2025": 56.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1772,
    "longitude": 78.3456,
    "rank": 703,
    "population": 5873354,
    "growth_2000_2025": 45.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7761,
    "longitude": 88.6875,
    "rank": 704,
    "population": 7661152,
    "growth_2000_2025": 12.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 16.9472,
    "longitude": 78.5079,
    "rank": 705,
    "population": 8176010,
    "growth_2000_2025": 63.9
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.414,
    "longitude": 80.2906,
    "rank": 706,
    "population": 11906096,
    "growth_2000_2025": 45.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7467,
    "longitude": 88.4315,
    "rank": 707,
    "population": 16626646,
    "growth_2000_2025": 10.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7299,
    "longitude": 80.5267,
    "rank": 708,
    "population": 8813656,
    "growth_2000_2025": 34.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6323,
    "longitude": 88.8116,
    "rank": 709,
    "population": 9966644,
    "growth_2000_2025": 11.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.6346,
    "longitude": 80.2439,
    "rank": 710,
    "population": 13305544,
    "growth_2000_2025": 44.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0469,
    "longitude": 72.6049,
    "rank": 711,
    "population": 5047346,
    "growth_2000_2025": 54.6
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1652,
    "longitude": 75.7813,
    "rank": 712,
    "population": 2800957,
    "growth_2000_2025": 40.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8134,
    "longitude": 77.1128,
    "rank": 713,
    "population": 6861478,
    "growth_2000_2025": 61.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.588,
    "longitude": 77.3382,
    "rank": 714,
    "population": 10554439,
    "growth_2000_2025": 65.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1162,
    "longitude": 77.3512,
    "rank": 715,
    "population": 22410484,
    "growth_2000_2025": 39.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2837,
    "longitude": 75.9357,
    "rank": 716,
    "population": 2933902,
    "growth_2000_2025": 44.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1697,
    "longitude": 76.9159,
    "rank": 717,
    "population": 13283495,
    "growth_2000_2025": 43.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1435,
    "longitude": 75.7328,
    "rank": 718,
    "population": 2083118,
    "growth_2000_2025": 44.5
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0303,
    "longitude": 72.5768,
    "rank": 719,
    "population": 13204884,
    "growth_2000_2025": 32.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6971,
    "longitude": 76.1839,
    "rank": 720,
    "population": 2735122,
    "growth_2000_2025": 50.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4547,
    "longitude": 72.4414,
    "rank": 721,
    "population": 7065140,
    "growth_2000_2025": 42.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.226,
    "longitude": 77.0399,
    "rank": 722,
    "population": 24097628,
    "growth_2000_2025": 39.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8204,
    "longitude": 77.2756,
    "rank": 723,
    "population": 25211701,
    "growth_2000_2025": 46.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3358,
    "longitude": 72.95,
    "rank": 724,
    "population": 19402110,
    "growth_2000_2025": 38.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7365,
    "longitude": 88.1098,
    "rank": 725,
    "population": 18821192,
    "growth_2000_2025": 9.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5635,
    "longitude": 78.0993,
    "rank": 726,
    "population": 14661541,
    "growth_2000_2025": 58.3
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5247,
    "longitude": 75.3533,
    "rank": 727,
    "population": 2568091,
    "growth_2000_2025": 45.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2366,
    "longitude": 73.0592,
    "rank": 728,
    "population": 11379793,
    "growth_2000_2025": 43.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.8469,
    "longitude": 77.9708,
    "rank": 729,
    "population": 10414770,
    "growth_2000_2025": 52.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5291,
    "longitude": 78.2641,
    "rank": 730,
    "population": 6076658,
    "growth_2000_2025": 56.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.023,
    "longitude": 74.151,
    "rank": 731,
    "population": 10831485,
    "growth_2000_2025": 79.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8891,
    "longitude": 88.3688,
    "rank": 732,
    "population": 14130898,
    "growth_2000_2025": 12.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.966,
    "longitude": 81.2134,
    "rank": 733,
    "population": 4869089,
    "growth_2000_2025": 37.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8685,
    "longitude": 75.7279,
    "rank": 734,
    "population": 4838814,
    "growth_2000_2025": 55.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1226,
    "longitude": 72.632,
    "rank": 735,
    "population": 10446292,
    "growth_2000_2025": 28.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.547,
    "longitude": 72.7899,
    "rank": 736,
    "population": 13234454,
    "growth_2000_2025": 32.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.9486,
    "longitude": 80.0597,
    "rank": 737,
    "population": 11178197,
    "growth_2000_2025": 37.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.7851,
    "longitude": 80.5782,
    "rank": 738,
    "population": 5117374,
    "growth_2000_2025": 53.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1641,
    "longitude": 80.39,
    "rank": 739,
    "population": 13669070,
    "growth_2000_2025": 36.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.3281,
    "longitude": 72.7561,
    "rank": 740,
    "population": 16781394,
    "growth_2000_2025": 26.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.352,
    "longitude": 78.7955,
    "rank": 741,
    "population": 7791295,
    "growth_2000_2025": 52.3
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.2577,
    "longitude": 80.5016,
    "rank": 742,
    "population": 5477575,
    "growth_2000_2025": 37.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9691,
    "longitude": 76.1611,
    "rank": 743,
    "population": 3441863,
    "growth_2000_2025": 43.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.5908,
    "longitude": 77.4396,
    "rank": 744,
    "population": 25624296,
    "growth_2000_2025": 38.9
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.2653,
    "longitude": 80.0408,
    "rank": 745,
    "population": 5075073,
    "growth_2000_2025": 40.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4716,
    "longitude": 88.3928,
    "rank": 746,
    "population": 19178793,
    "growth_2000_2025": 11.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6288,
    "longitude": 77.737,
    "rank": 747,
    "population": 16176620,
    "growth_2000_2025": 67.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.0784,
    "longitude": 72.4643,
    "rank": 748,
    "population": 11127563,
    "growth_2000_2025": 57.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1804,
    "longitude": 78.0133,
    "rank": 749,
    "population": 16018848,
    "growth_2000_2025": 71.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5664,
    "longitude": 87.9504,
    "rank": 750,
    "population": 10932537,
    "growth_2000_2025": 11.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.059,
    "longitude": 79.9449,
    "rank": 751,
    "population": 7668090,
    "growth_2000_2025": 36.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3805,
    "longitude": 75.48,
    "rank": 752,
    "population": 2290266,
    "growth_2000_2025": 51.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.905,
    "longitude": 72.5782,
    "rank": 753,
    "population": 13884801,
    "growth_2000_2025": 26.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6585,
    "longitude": 88.6075,
    "rank": 754,
    "population": 17231499,
    "growth_2000_2025": 11.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1868,
    "longitude": 81.0448,
    "rank": 755,
    "population": 3786478,
    "growth_2000_2025": 48.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9023,
    "longitude": 73.538,
    "rank": 756,
    "population": 7521488,
    "growth_2000_2025": 67.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5672,
    "longitude": 88.4114,
    "rank": 757,
    "population": 15264647,
    "growth_2000_2025": 12.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2596,
    "longitude": 78.7574,
    "rank": 758,
    "population": 8789878,
    "growth_2000_2025": 64.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0774,
    "longitude": 77.8538,
    "rank": 759,
    "population": 7491106,
    "growth_2000_2025": 68.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.8827,
    "longitude": 81.4059,
    "rank": 760,
    "population": 5546278,
    "growth_2000_2025": 41.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.397,
    "longitude": 80.5923,
    "rank": 761,
    "population": 11801182,
    "growth_2000_2025": 32.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2187,
    "longitude": 78.0423,
    "rank": 762,
    "population": 14808594,
    "growth_2000_2025": 75.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3446,
    "longitude": 72.4154,
    "rank": 763,
    "population": 5473148,
    "growth_2000_2025": 58.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 16.9677,
    "longitude": 78.7983,
    "rank": 764,
    "population": 14324048,
    "growth_2000_2025": 45.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5751,
    "longitude": 75.4504,
    "rank": 765,
    "population": 2014799,
    "growth_2000_2025": 39.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1224,
    "longitude": 78.985,
    "rank": 766,
    "population": 15949381,
    "growth_2000_2025": 63.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2019,
    "longitude": 77.6123,
    "rank": 767,
    "population": 10518852,
    "growth_2000_2025": 75.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3276,
    "longitude": 80.1397,
    "rank": 768,
    "population": 10954836,
    "growth_2000_2025": 42.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.379,
    "longitude": 73.0943,
    "rank": 769,
    "population": 15436989,
    "growth_2000_2025": 29.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3994,
    "longitude": 73.4201,
    "rank": 770,
    "population": 7004116,
    "growth_2000_2025": 65.6
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 23.0005,
    "longitude": 88.2797,
    "rank": 771,
    "population": 9530565,
    "growth_2000_2025": 12.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.5867,
    "longitude": 72.2365,
    "rank": 772,
    "population": 8989878,
    "growth_2000_2025": 41.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8969,
    "longitude": 75.6773,
    "rank": 773,
    "population": 4429415,
    "growth_2000_2025": 46.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2311,
    "longitude": 73.9759,
    "rank": 774,
    "population": 3825102,
    "growth_2000_2025": 57.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2822,
    "longitude": 73.4227,
    "rank": 775,
    "population": 10358595,
    "growth_2000_2025": 61.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7923,
    "longitude": 80.0781,
    "rank": 776,
    "population": 11688247,
    "growth_2000_2025": 35.7
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0213,
    "longitude": 80.9643,
    "rank": 777,
    "population": 2242812,
    "growth_2000_2025": 49.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0475,
    "longitude": 78.7691,
    "rank": 778,
    "population": 7724489,
    "growth_2000_2025": 53.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.25,
    "longitude": 87.963,
    "rank": 779,
    "population": 16093106,
    "growth_2000_2025": 10.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.3416,
    "longitude": 72.9959,
    "rank": 780,
    "population": 7518598,
    "growth_2000_2025": 40.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8951,
    "longitude": 75.5545,
    "rank": 781,
    "population": 5787930,
    "growth_2000_2025": 50.6
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.293,
    "longitude": 80.9187,
    "rank": 782,
    "population": 2260348,
    "growth_2000_2025": 53.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7046,
    "longitude": 88.726,
    "rank": 783,
    "population": 21468939,
    "growth_2000_2025": 12.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.5843,
    "longitude": 72.4345,
    "rank": 784,
    "population": 25571283,
    "growth_2000_2025": 33.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9534,
    "longitude": 77.0535,
    "rank": 785,
    "population": 26738491,
    "growth_2000_2025": 42.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3074,
    "longitude": 80.464,
    "rank": 786,
    "population": 10864168,
    "growth_2000_2025": 35.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4035,
    "longitude": 73.2304,
    "rank": 787,
    "population": 13535477,
    "growth_2000_2025": 33.0
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1835,
    "longitude": 72.6659,
    "rank": 788,
    "population": 6781815,
    "growth_2000_2025": 57.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1635,
    "longitude": 72.3077,
    "rank": 789,
    "population": 8360452,
    "growth_2000_2025": 57.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7087,
    "longitude": 78.0499,
    "rank": 790,
    "population": 8131528,
    "growth_2000_2025": 61.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.7582,
    "longitude": 88.2104,
    "rank": 791,
    "population": 12336006,
    "growth_2000_2025": 10.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.131,
    "longitude": 79.8726,
    "rank": 792,
    "population": 7851056,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.5053,
    "longitude": 72.0785,
    "rank": 793,
    "population": 11313907,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.609,
    "longitude": 76.1873,
    "rank": 794,
    "population": 2647834,
    "growth_2000_2025": 41.6
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.5127,
    "longitude": 73.0766,
    "rank": 795,
    "population": 23762476,
    "growth_2000_2025": 34.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0801,
    "longitude": 80.8942,
    "rank": 796,
    "population": 4961083,
    "growth_2000_2025": 47.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.004,
    "longitude": 77.5582,
    "rank": 797,
    "population": 18877168,
    "growth_2000_2025": 70.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.302,
    "longitude": 88.0799,
    "rank": 798,
    "population": 9375679,
    "growth_2000_2025": 13.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5723,
    "longitude": 75.8223,
    "rank": 799,
    "population": 4871072,
    "growth_2000_2025": 47.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.745,
    "longitude": 76.2342,
    "rank": 800,
    "population": 4473567,
    "growth_2000_2025": 50.0
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7804,
    "longitude": 75.8424,
    "rank": 801,
    "population": 5769842,
    "growth_2000_2025": 42.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3951,
    "longitude": 77.3196,
    "rank": 802,
    "population": 12302278,
    "growth_2000_2025": 37.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3303,
    "longitude": 76.1864,
    "rank": 803,
    "population": 3694867,
    "growth_2000_2025": 44.9
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.717,
    "longitude": 77.6478,
    "rank": 804,
    "population": 13284285,
    "growth_2000_2025": 56.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5177,
    "longitude": 76.204,
    "rank": 805,
    "population": 2955360,
    "growth_2000_2025": 37.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.0288,
    "longitude": 74.1799,
    "rank": 806,
    "population": 6772818,
    "growth_2000_2025": 61.5
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.4941,
    "longitude": 80.827,
    "rank": 807,
    "population": 2731356,
    "growth_2000_2025": 53.0
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.194,
    "longitude": 88.6543,
    "rank": 808,
    "population": 17397290,
    "growth_2000_2025": 13.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3136,
    "longitude": 77.3058,
    "rank": 809,
    "population": 17010699,
    "growth_2000_2025": 76.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1971,
    "longitude": 78.272,
    "rank": 810,
    "population": 6127488,
    "growth_2000_2025": 65.2
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.8691,
    "longitude": 88.0696,
    "rank": 811,
    "population": 20783760,
    "growth_2000_2025": 11.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1951,
    "longitude": 81.114,
    "rank": 812,
    "population": 2213636,
    "growth_2000_2025": 41.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.889,
    "longitude": 74.1134,
    "rank": 813,
    "population": 7347344,
    "growth_2000_2025": 69.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.7943,
    "longitude": 80.611,
    "rank": 814,
    "population": 9451563,
    "growth_2000_2025": 42.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0815,
    "longitude": 78.6976,
    "rank": 815,
    "population": 12162622,
    "growth_2000_2025": 58.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7246,
    "longitude": 73.9212,
    "rank": 816,
    "population": 10227136,
    "growth_2000_2025": 58.9
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6526,
    "longitude": 72.4916,
    "rank": 817,
    "population": 11699570,
    "growth_2000_2025": 37.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.7325,
    "longitude": 73.1932,
    "rank": 818,
    "population": 19149134,
    "growth_2000_2025": 27.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8655,
    "longitude": 77.3314,
    "rank": 819,
    "population": 20613249,
    "growth_2000_2025": 34.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6009,
    "longitude": 77.0987,
    "rank": 820,
    "population": 11435779,
    "growth_2000_2025": 63.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2934,
    "longitude": 87.9706,
    "rank": 821,
    "population": 19140981,
    "growth_2000_2025": 9.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4752,
    "longitude": 76.9532,
    "rank": 822,
    "population": 18331355,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4363,
    "longitude": 76.9016,
    "rank": 823,
    "population": 17965528,
    "growth_2000_2025": 39.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3445,
    "longitude": 77.1937,
    "rank": 824,
    "population": 8054920,
    "growth_2000_2025": 62.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5843,
    "longitude": 77.0969,
    "rank": 825,
    "population": 18057602,
    "growth_2000_2025": 77.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4612,
    "longitude": 78.3709,
    "rank": 826,
    "population": 9981347,
    "growth_2000_2025": 61.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7083,
    "longitude": 78.0683,
    "rank": 827,
    "population": 11057102,
    "growth_2000_2025": 65.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.5217,
    "longitude": 73.8176,
    "rank": 828,
    "population": 5316714,
    "growth_2000_2025": 78.7
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.8975,
    "longitude": 76.0027,
    "rank": 829,
    "population": 2843739,
    "growth_2000_2025": 52.5
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4067,
    "longitude": 80.196,
    "rank": 830,
    "population": 13717763,
    "growth_2000_2025": 35.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.097,
    "longitude": 77.6447,
    "rank": 831,
    "population": 19238594,
    "growth_2000_2025": 38.0
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5618,
    "longitude": 77.9168,
    "rank": 832,
    "population": 12536047,
    "growth_2000_2025": 55.2
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.275,
    "longitude": 74.3474,
    "rank": 833,
    "population": 9666097,
    "growth_2000_2025": 84.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3964,
    "longitude": 73.7345,
    "rank": 834,
    "population": 8705975,
    "growth_2000_2025": 77.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0561,
    "longitude": 76.8666,
    "rank": 835,
    "population": 14365747,
    "growth_2000_2025": 37.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5527,
    "longitude": 88.7034,
    "rank": 836,
    "population": 9022031,
    "growth_2000_2025": 10.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.9721,
    "longitude": 78.0429,
    "rank": 837,
    "population": 15819851,
    "growth_2000_2025": 58.0
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2768,
    "longitude": 73.2541,
    "rank": 838,
    "population": 11191971,
    "growth_2000_2025": 30.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.088,
    "longitude": 81.4461,
    "rank": 839,
    "population": 5475213,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4913,
    "longitude": 77.1546,
    "rank": 840,
    "population": 29650610,
    "growth_2000_2025": 43.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0207,
    "longitude": 77.0423,
    "rank": 841,
    "population": 27207085,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.5586,
    "longitude": 88.5347,
    "rank": 842,
    "population": 10902722,
    "growth_2000_2025": 12.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7214,
    "longitude": 75.6727,
    "rank": 843,
    "population": 5690149,
    "growth_2000_2025": 54.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.949,
    "longitude": 73.5384,
    "rank": 844,
    "population": 8610087,
    "growth_2000_2025": 77.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.5526,
    "longitude": 77.6585,
    "rank": 845,
    "population": 8231794,
    "growth_2000_2025": 52.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.453,
    "longitude": 78.6428,
    "rank": 846,
    "population": 7900043,
    "growth_2000_2025": 65.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.2777,
    "longitude": 77.9532,
    "rank": 847,
    "population": 15215987,
    "growth_2000_2025": 58.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7938,
    "longitude": 74.2653,
    "rank": 848,
    "population": 9544096,
    "growth_2000_2025": 79.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.6247,
    "longitude": 77.0653,
    "rank": 849,
    "population": 23726862,
    "growth_2000_2025": 41.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4003,
    "longitude": 78.4677,
    "rank": 850,
    "population": 7202351,
    "growth_2000_2025": 59.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.282,
    "longitude": 77.5078,
    "rank": 851,
    "population": 16000740,
    "growth_2000_2025": 65.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0792,
    "longitude": 77.9991,
    "rank": 852,
    "population": 10168176,
    "growth_2000_2025": 54.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7233,
    "longitude": 75.8369,
    "rank": 853,
    "population": 3407796,
    "growth_2000_2025": 41.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 16.8889,
    "longitude": 78.4518,
    "rank": 854,
    "population": 10967449,
    "growth_2000_2025": 61.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2746,
    "longitude": 73.7279,
    "rank": 855,
    "population": 4402710,
    "growth_2000_2025": 72.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3754,
    "longitude": 73.628,
    "rank": 856,
    "population": 8056510,
    "growth_2000_2025": 83.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.9781,
    "longitude": 88.8053,
    "rank": 857,
    "population": 11229634,
    "growth_2000_2025": 11.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8375,
    "longitude": 78.9329,
    "rank": 858,
    "population": 10868358,
    "growth_2000_2025": 64.8
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.57,
    "longitude": 88.8189,
    "rank": 859,
    "population": 18986147,
    "growth_2000_2025": 9.8
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4694,
    "longitude": 78.0381,
    "rank": 860,
    "population": 14225071,
    "growth_2000_2025": 56.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1259,
    "longitude": 80.5055,
    "rank": 861,
    "population": 5120696,
    "growth_2000_2025": 53.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2967,
    "longitude": 72.844,
    "rank": 862,
    "population": 14104036,
    "growth_2000_2025": 37.9
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9092,
    "longitude": 73.5881,
    "rank": 863,
    "population": 10513408,
    "growth_2000_2025": 63.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9992,
    "longitude": 77.1611,
    "rank": 864,
    "population": 21744052,
    "growth_2000_2025": 35.9
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.754,
    "longitude": 78.0752,
    "rank": 865,
    "population": 9600744,
    "growth_2000_2025": 56.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3458,
    "longitude": 77.964,
    "rank": 866,
    "population": 11290250,
    "growth_2000_2025": 60.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.0259,
    "longitude": 80.8578,
    "rank": 867,
    "population": 4050426,
    "growth_2000_2025": 45.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0274,
    "longitude": 78.8003,
    "rank": 868,
    "population": 13853061,
    "growth_2000_2025": 61.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.4039,
    "longitude": 77.5071,
    "rank": 869,
    "population": 6854258,
    "growth_2000_2025": 62.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.4324,
    "longitude": 81.0494,
    "rank": 870,
    "population": 4266915,
    "growth_2000_2025": 42.5
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.4392,
    "longitude": 72.9035,
    "rank": 871,
    "population": 17904719,
    "growth_2000_2025": 37.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1883,
    "longitude": 77.9996,
    "rank": 872,
    "population": 11268481,
    "growth_2000_2025": 57.4
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.1326,
    "longitude": 80.9865,
    "rank": 873,
    "population": 5302829,
    "growth_2000_2025": 46.0
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.8885,
    "longitude": 80.5853,
    "rank": 874,
    "population": 8518707,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7126,
    "longitude": 73.4174,
    "rank": 875,
    "population": 7825157,
    "growth_2000_2025": 63.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.9741,
    "longitude": 76.2081,
    "rank": 876,
    "population": 5031048,
    "growth_2000_2025": 47.6
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.628,
    "longitude": 77.3998,
    "rank": 877,
    "population": 18054513,
    "growth_2000_2025": 34.0
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.3389,
    "longitude": 78.4081,
    "rank": 878,
    "population": 7917614,
    "growth_2000_2025": 48.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.7724,
    "longitude": 72.4108,
    "rank": 879,
    "population": 10800245,
    "growth_2000_2025": 49.4
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4007,
    "longitude": 72.5264,
    "rank": 880,
    "population": 6668199,
    "growth_2000_2025": 58.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3718,
    "longitude": 88.5748,
    "rank": 881,
    "population": 10274864,
    "growth_2000_2025": 12.0
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.5887,
    "longitude": 72.4359,
    "rank": 882,
    "population": 12764456,
    "growth_2000_2025": 38.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.204,
    "longitude": 75.9333,
    "rank": 883,
    "population": 3579787,
    "growth_2000_2025": 46.7
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4078,
    "longitude": 78.3814,
    "rank": 884,
    "population": 11851100,
    "growth_2000_2025": 65.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4855,
    "longitude": 77.3587,
    "rank": 885,
    "population": 20882474,
    "growth_2000_2025": 38.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1237,
    "longitude": 88.7394,
    "rank": 886,
    "population": 7976784,
    "growth_2000_2025": 11.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4536,
    "longitude": 72.996,
    "rank": 887,
    "population": 4985419,
    "growth_2000_2025": 55.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.9156,
    "longitude": 81.002,
    "rank": 888,
    "population": 2496182,
    "growth_2000_2025": 46.6
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.2409,
    "longitude": 72.8233,
    "rank": 889,
    "population": 7680221,
    "growth_2000_2025": 51.3
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.6192,
    "longitude": 73.3065,
    "rank": 890,
    "population": 10296690,
    "growth_2000_2025": 27.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8352,
    "longitude": 73.8199,
    "rank": 891,
    "population": 8601311,
    "growth_2000_2025": 60.2
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.4785,
    "longitude": 80.5865,
    "rank": 892,
    "population": 4522388,
    "growth_2000_2025": 43.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2727,
    "longitude": 73.5282,
    "rank": 893,
    "population": 4652621,
    "growth_2000_2025": 82.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9304,
    "longitude": 77.3933,
    "rank": 894,
    "population": 10432020,
    "growth_2000_2025": 38.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0855,
    "longitude": 80.3166,
    "rank": 895,
    "population": 6172389,
    "growth_2000_2025": 40.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7726,
    "longitude": 75.5517,
    "rank": 896,
    "population": 3667361,
    "growth_2000_2025": 48.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.0045,
    "longitude": 79.9133,
    "rank": 897,
    "population": 9728533,
    "growth_2000_2025": 31.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3266,
    "longitude": 74.3058,
    "rank": 898,
    "population": 4598475,
    "growth_2000_2025": 60.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1222,
    "longitude": 72.7182,
    "rank": 899,
    "population": 10698497,
    "growth_2000_2025": 40.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.0943,
    "longitude": 73.4232,
    "rank": 900,
    "population": 6245485,
    "growth_2000_2025": 57.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7297,
    "longitude": 77.3243,
    "rank": 901,
    "population": 9588712,
    "growth_2000_2025": 55.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7929,
    "longitude": 73.5146,
    "rank": 902,
    "population": 6880777,
    "growth_2000_2025": 75.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.8755,
    "longitude": 72.552,
    "rank": 903,
    "population": 5146056,
    "growth_2000_2025": 51.1
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.2177,
    "longitude": 78.13,
    "rank": 904,
    "population": 12559588,
    "growth_2000_2025": 59.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.0125,
    "longitude": 72.9133,
    "rank": 905,
    "population": 23518527,
    "growth_2000_2025": 29.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4207,
    "longitude": 80.6067,
    "rank": 906,
    "population": 7342876,
    "growth_2000_2025": 36.3
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.9582,
    "longitude": 72.3268,
    "rank": 907,
    "population": 7601636,
    "growth_2000_2025": 51.8
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.1561,
    "longitude": 72.4617,
    "rank": 908,
    "population": 30101847,
    "growth_2000_2025": 33.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.0443,
    "longitude": 78.9381,
    "rank": 909,
    "population": 7894586,
    "growth_2000_2025": 64.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.8535,
    "longitude": 78.7484,
    "rank": 910,
    "population": 9257727,
    "growth_2000_2025": 51.4
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1406,
    "longitude": 80.751,
    "rank": 911,
    "population": 11416998,
    "growth_2000_2025": 43.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1001,
    "longitude": 76.2516,
    "rank": 912,
    "population": 2797842,
    "growth_2000_2025": 39.2
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6449,
    "longitude": 75.7366,
    "rank": 913,
    "population": 5329039,
    "growth_2000_2025": 46.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.6782,
    "longitude": 76.1393,
    "rank": 914,
    "population": 2302807,
    "growth_2000_2025": 45.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7265,
    "longitude": 78.8202,
    "rank": 915,
    "population": 12700739,
    "growth_2000_2025": 57.2
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.4698,
    "longitude": 79.9099,
    "rank": 916,
    "population": 11353667,
    "growth_2000_2025": 35.8
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5674,
    "longitude": 81.0191,
    "rank": 917,
    "population": 5377260,
    "growth_2000_2025": 43.8
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.1764,
    "longitude": 75.9662,
    "rank": 918,
    "population": 2991265,
    "growth_2000_2025": 39.1
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3232,
    "longitude": 74.0622,
    "rank": 919,
    "population": 10594558,
    "growth_2000_2025": 58.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5154,
    "longitude": 78.5541,
    "rank": 920,
    "population": 6575545,
    "growth_2000_2025": 51.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0849,
    "longitude": 76.9469,
    "rank": 921,
    "population": 19571885,
    "growth_2000_2025": 39.1
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.5387,
    "longitude": 80.9253,
    "rank": 922,
    "population": 3842892,
    "growth_2000_2025": 44.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2489,
    "longitude": 88.1733,
    "rank": 923,
    "population": 22102985,
    "growth_2000_2025": 11.2
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1375,
    "longitude": 77.9875,
    "rank": 924,
    "population": 8800126,
    "growth_2000_2025": 58.7
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 12.904,
    "longitude": 80.6906,
    "rank": 925,
    "population": 12023852,
    "growth_2000_2025": 34.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3614,
    "longitude": 75.785,
    "rank": 926,
    "population": 4601564,
    "growth_2000_2025": 44.1
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.563,
    "longitude": 73.2143,
    "rank": 927,
    "population": 26012900,
    "growth_2000_2025": 36.1
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0045,
    "longitude": 77.2496,
    "rank": 928,
    "population": 17905492,
    "growth_2000_2025": 73.4
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0115,
    "longitude": 75.7025,
    "rank": 929,
    "population": 4981452,
    "growth_2000_2025": 51.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1899,
    "longitude": 77.5603,
    "rank": 930,
    "population": 6583778,
    "growth_2000_2025": 68.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0091,
    "longitude": 76.2795,
    "rank": 931,
    "population": 5448904,
    "growth_2000_2025": 53.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.4361,
    "longitude": 77.143,
    "rank": 932,
    "population": 15059975,
    "growth_2000_2025": 67.4
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.7633,
    "longitude": 78.6197,
    "rank": 933,
    "population": 13228729,
    "growth_2000_2025": 57.8
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.4688,
    "longitude": 77.923,
    "rank": 934,
    "population": 9602495,
    "growth_2000_2025": 73.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.4177,
    "longitude": 73.6449,
    "rank": 935,
    "population": 11192098,
    "growth_2000_2025": 56.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.4869,
    "longitude": 76.9301,
    "rank": 936,
    "population": 19030203,
    "growth_2000_2025": 43.1
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4487,
    "longitude": 88.0722,
    "rank": 937,
    "population": 18268022,
    "growth_2000_2025": 13.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2371,
    "longitude": 72.9372,
    "rank": 938,
    "population": 19936648,
    "growth_2000_2025": 27.3
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.1276,
    "longitude": 80.7466,
    "rank": 939,
    "population": 6045910,
    "growth_2000_2025": 44.8
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.5284,
    "longitude": 72.284,
    "rank": 940,
    "population": 6661817,
    "growth_2000_2025": 55.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0767,
    "longitude": 77.616,
    "rank": 941,
    "population": 28976717,
    "growth_2000_2025": 39.4
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1205,
    "longitude": 77.5836,
    "rank": 942,
    "population": 13996734,
    "growth_2000_2025": 42.3
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.1456,
    "longitude": 78.0555,
    "rank": 943,
    "population": 10479149,
    "growth_2000_2025": 54.3
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.7623,
    "longitude": 74.0233,
    "rank": 944,
    "population": 8740741,
    "growth_2000_2025": 60.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3538,
    "longitude": 76.9793,
    "rank": 945,
    "population": 14076912,
    "growth_2000_2025": 43.4
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.825,
    "longitude": 77.7679,
    "rank": 946,
    "population": 6712794,
    "growth_2000_2025": 64.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9182,
    "longitude": 72.7696,
    "rank": 947,
    "population": 24523119,
    "growth_2000_2025": 32.8
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.9479,
    "longitude": 76.7858,
    "rank": 948,
    "population": 20183531,
    "growth_2000_2025": 48.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.1272,
    "longitude": 88.5214,
    "rank": 949,
    "population": 10658804,
    "growth_2000_2025": 11.3
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.6871,
    "longitude": 77.685,
    "rank": 950,
    "population": 14358410,
    "growth_2000_2025": 67.4
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.6835,
    "longitude": 88.1043,
    "rank": 951,
    "population": 20275437,
    "growth_2000_2025": 9.4
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.2329,
    "longitude": 73.2939,
    "rank": 952,
    "population": 21636871,
    "growth_2000_2025": 38.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.1507,
    "longitude": 77.9915,
    "rank": 953,
    "population": 7668137,
    "growth_2000_2025": 71.7
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 18.9128,
    "longitude": 73.0152,
    "rank": 954,
    "population": 29068006,
    "growth_2000_2025": 37.7
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.2157,
    "longitude": 88.7138,
    "rank": 955,
    "population": 17550028,
    "growth_2000_2025": 11.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7107,
    "longitude": 77.4065,
    "rank": 956,
    "population": 22368851,
    "growth_2000_2025": 38.1
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.4088,
    "longitude": 75.5399,
    "rank": 957,
    "population": 4816086,
    "growth_2000_2025": 48.7
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.863,
    "longitude": 77.1025,
    "rank": 958,
    "population": 19089782,
    "growth_2000_2025": 73.5
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.0881,
    "longitude": 77.317,
    "rank": 959,
    "population": 8111314,
    "growth_2000_2025": 52.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 13.3941,
    "longitude": 77.4937,
    "rank": 960,
    "population": 10887878,
    "growth_2000_2025": 64.3
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.0932,
    "longitude": 88.7843,
    "rank": 961,
    "population": 17733187,
    "growth_2000_2025": 9.9
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 26.6406,
    "longitude": 80.8419,
    "rank": 962,
    "population": 5600546,
    "growth_2000_2025": 52.3
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 29.0731,
    "longitude": 77.3292,
    "rank": 963,
    "population": 18035597,
    "growth_2000_2025": 45.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.019,
    "longitude": 75.3217,
    "rank": 964,
    "population": 2084526,
    "growth_2000_2025": 40.0
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.2809,
    "longitude": 76.0026,
    "rank": 965,
    "population": 5724656,
    "growth_2000_2025": 46.6
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3524,
    "longitude": 80.5158,
    "rank": 966,
    "population": 6356077,
    "growth_2000_2025": 39.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.2635,
    "longitude": 73.9683,
    "rank": 967,
    "population": 5398729,
    "growth_2000_2025": 65.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.5136,
    "longitude": 76.2645,
    "rank": 968,
    "population": 2666051,
    "growth_2000_2025": 41.1
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.1706,
    "longitude": 72.7546,
    "rank": 969,
    "population": 10916015,
    "growth_2000_2025": 43.9
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.4245,
    "longitude": 88.5217,
    "rank": 970,
    "population": 16947296,
    "growth_2000_2025": 11.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.3933,
    "longitude": 76.972,
    "rank": 971,
    "population": 24046796,
    "growth_2000_2025": 44.0
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.3395,
    "longitude": 81.3137,
    "rank": 972,
    "population": 3442800,
    "growth_2000_2025": 40.6
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "latitude": 27.133,
    "longitude": 81.1737,
    "rank": 973,
    "population": 2124336,
    "growth_2000_2025": 46.5
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8345,
    "longitude": 77.0326,
    "rank": 974,
    "population": 16333698,
    "growth_2000_2025": 38.2
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7161,
    "longitude": 77.6576,
    "rank": 975,
    "population": 11743133,
    "growth_2000_2025": 36.5
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.3188,
    "longitude": 75.3369,
    "rank": 976,
    "population": 4614159,
    "growth_2000_2025": 46.5
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "latitude": 22.3745,
    "longitude": 88.3882,
    "rank": 977,
    "population": 10707059,
    "growth_2000_2025": 12.2
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "latitude": 19.5504,
    "longitude": 73.1587,
    "rank": 978,
    "population": 18509854,
    "growth_2000_2025": 31.6
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.9221,
    "longitude": 74.1518,
    "rank": 979,
    "population": 5299745,
    "growth_2000_2025": 64.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.1447,
    "longitude": 76.8572,
    "rank": 980,
    "population": 27914863,
    "growth_2000_2025": 34.4
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.8172,
    "longitude": 73.5498,
    "rank": 981,
    "population": 6599888,
    "growth_2000_2025": 63.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 27.0448,
    "longitude": 75.6825,
    "rank": 982,
    "population": 4437168,
    "growth_2000_2025": 50.6
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.5877,
    "longitude": 78.2575,
    "rank": 983,
    "population": 8647507,
    "growth_2000_2025": 48.0
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.7762,
    "longitude": 77.1235,
    "rank": 984,
    "population": 13464368,
    "growth_2000_2025": 43.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 22.6533,
    "longitude": 72.0725,
    "rank": 985,
    "population": 6777209,
    "growth_2000_2025": 52.0
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.3313,
    "longitude": 73.6311,
    "rank": 986,
    "population": 4844378,
    "growth_2000_2025": 56.9
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.226,
    "longitude": 77.121,
    "rank": 987,
    "population": 24925929,
    "growth_2000_2025": 41.7
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.4986,
    "longitude": 73.5056,
    "rank": 988,
    "population": 8096979,
    "growth_2000_2025": 64.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 16.9027,
    "longitude": 78.1322,
    "rank": 989,
    "population": 7749115,
    "growth_2000_2025": 55.7
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "latitude": 28.8851,
    "longitude": 77.2933,
    "rank": 990,
    "population": 13403435,
    "growth_2000_2025": 37.6
  },
  {
    "city": "Bangalore",
    "state": "Karnataka",
    "latitude": 12.7395,
    "longitude": 77.7034,
    "rank": 991,
    "population": 16785751,
    "growth_2000_2025": 55.7
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4432,
    "longitude": 72.1499,
    "rank": 992,
    "population": 5382754,
    "growth_2000_2025": 42.5
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.058,
    "longitude": 78.836,
    "rank": 993,
    "population": 13571638,
    "growth_2000_2025": 49.2
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "latitude": 17.4304,
    "longitude": 78.2719,
    "rank": 994,
    "population": 10034937,
    "growth_2000_2025": 44.9
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "latitude": 26.7031,
    "longitude": 76.0333,
    "rank": 995,
    "population": 5612500,
    "growth_2000_2025": 53.5
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.0725,
    "longitude": 74.14,
    "rank": 996,
    "population": 4170929,
    "growth_2000_2025": 84.8
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "latitude": 18.4486,
    "longitude": 73.693,
    "rank": 997,
    "population": 5712948,
    "growth_2000_2025": 81.9
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "latitude": 23.4231,
    "longitude": 72.3746,
    "rank": 998,
    "population": 7408686,
    "growth_2000_2025": 51.8
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.5138,
    "longitude": 80.7234,
    "rank": 999,
    "population": 5695420,
    "growth_2000_2025": 43.1
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "latitude": 13.3505,
    "longitude": 80.4911,
    "rank": 1000,
    "population": 6326338,
    "growth_2000_2025": 46.3
  }
];

module.exports = cities