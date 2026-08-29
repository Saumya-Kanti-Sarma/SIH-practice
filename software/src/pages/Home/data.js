const room_data = {
  floor1: [
    {
      floorNo: 1,
      roomNo: 101,
      status: "occupied",
      roomType: "Single",
      priorityScore: null,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "01 Sep 2026, 12:00 PM",
        checkout_time: "04 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 1,
      roomNo: 102,
      status: "booked",
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "01 Sep 2026, 09:15 PM",
        checkout_time: "04 Sep 2026, 11:00 AM"
      },
      roomType: "Double",
      priorityScore: null
    },

    {
      floorNo: 1,
      roomNo: 103,
      status: "cleaning",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Maya Joshi",
        assigned_at: "30 Aug 2026, 08:15 AM"
      },
      futureBooking: {
        customer_name: "Dev Patel",
        checkin_time: "31 Aug 2026, 02:00 PM",
        priorityScore: 58
      }
    },

    {
      floorNo: 1,
      roomNo: 104,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Ananya Sharma",
        checkin_time: "27 Aug 2026, 03:40 PM",
        checkout_time: "30 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 1,
      roomNo: 105,
      status: "maintenance",
      roomType: "Single",
      priorityScore: null,
      maintenance: {
        work: "Air-conditioner servicing",
        worker_name: "Ravi Kumar",
        required_time: "2 hours"
      }
    },

    {
      floorNo: 1,
      roomNo: 106,
      status: "empty",
      roomType: "Double",
      priorityScore: null,
      emptyReason: "Pending deep cleaning"
    },

    {
      floorNo: 1,
      roomNo: 107,
      status: "inspection",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Arjun Rao",
        assigned_at: "30 Aug 2026, 09:00 AM"
      },
      futureBooking: {
        customer_name: "Nitin Shah",
        checkin_time: "01 Sep 2026, 03:00 PM",
        priorityScore: 12
      }
    }
  ],

  floor2: [
    {
      floorNo: 2,
      roomNo: 201,
      status: "occupied",
      roomType: "Single",
      priorityScore: 20,
      customer: {
        customer_name: "Rohan Kapoor",
        checkin_time: "26 Aug 2026, 01:20 PM",
        checkout_time: "31 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 2,
      roomNo: 202,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Ishita Rao",
        checkin_time: "28 Aug 2026, 04:10 PM",
        checkout_time: "02 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 2,
      roomNo: 203,
      status: "cleaning",
      roomType: "Double",
      priorityScore: null,
      worker: {
        worker_name: "Kavya Menon",
        assigned_at: "30 Aug 2026, 07:45 AM"
      },
      futureBooking: {
        customer_name: "Sana Khan",
        checkin_time: "31 Aug 2026, 04:00 PM",
        priorityScore: 55
      }
    },

    {
      floorNo: 2,
      roomNo: 204,
      status: "inspection",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Ritesh Kumar",
        assigned_at: "30 Aug 2026, 10:20 AM"
      },
      futureBooking: {
        customer_name: "Ira Sen",
        checkin_time: "03 Sep 2026, 01:00 PM",
        priorityScore: 9
      }
    },

    {
      floorNo: 2,
      roomNo: 205,
      status: "occupied",
      roomType: "Single",
      priorityScore: null,
      customer: {
        customer_name: "Kabir Malhotra",
        checkin_time: "29 Aug 2026, 12:45 PM",
        checkout_time: "03 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 2,
      roomNo: 206,
      status: "empty",
      roomType: "Double",
      priorityScore: null,
      emptyReason: "Awaiting maintenance clearance"
    },

    {
      floorNo: 2,
      roomNo: 207,
      status: "booked",
      roomType: "Single",
      priorityScore: 24,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "01 Sep 2026, 02:15 PM",
        checkout_time: "05 Sep 2026, 11:00 AM"
      }
    }
  ],

  floor3: [
    {
      floorNo: 3,
      roomNo: 301,
      status: "maintenance",
      roomType: "Double",
      priorityScore: null,
      maintenance: {
        work: "Bathroom plumbing repair",
        worker_name: "Suresh Patil",
        required_time: "3 hours"
      }
    },

    {
      floorNo: 3,
      roomNo: 302,
      status: "occupied",
      roomType: "Single",
      priorityScore: null,
      customer: {
        customer_name: "Vikram Singh",
        checkin_time: "25 Aug 2026, 02:30 PM",
        checkout_time: "30 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 3,
      roomNo: 303,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Meera Iyer",
        checkin_time: "27 Aug 2026, 05:00 PM",
        checkout_time: "01 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 3,
      roomNo: 304,
      status: "cleaning",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Zoya Ali",
        assigned_at: "30 Aug 2026, 08:40 AM"
      },
      futureBooking: {
        customer_name: "Riya Nair",
        checkin_time: "01 Sep 2026, 02:30 PM",
        priorityScore: 11
      }
    },

    {
      floorNo: 3,
      roomNo: 305,
      status: "occupied",
      roomType: "Double",
      priorityScore: 23,
      customer: {
        customer_name: "Arjun Nair",
        checkin_time: "28 Aug 2026, 03:15 PM",
        checkout_time: "04 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 3,
      roomNo: 306,
      status: "inspection",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Vivek Das",
        assigned_at: "30 Aug 2026, 11:10 AM"
      },
      futureBooking: {
        customer_name: "Aditi Bose",
        checkin_time: "04 Sep 2026, 03:30 PM",
        priorityScore: 7
      }
    }
  ],

  floor4: [
    {
      floorNo: 4,
      roomNo: 401,
      status: "booked",
      roomType: "Single",
      priorityScore: 22,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "31 Aug 2026, 02:15 PM",
        checkout_time: "05 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 4,
      roomNo: 402,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Neha Verma",
        checkin_time: "26 Aug 2026, 01:50 PM",
        checkout_time: "31 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 4,
      roomNo: 403,
      status: "empty",
      roomType: "Single",
      priorityScore: null,
      emptyReason: "Guest checkout; cleaning not started"
    },

    {
      floorNo: 4,
      roomNo: 404,
      status: "occupied",
      roomType: "Double",
      priorityScore: 21,
      customer: {
        customer_name: "Aditya Joshi",
        checkin_time: "29 Aug 2026, 04:25 PM",
        checkout_time: "02 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 4,
      roomNo: 405,
      status: "cleaning",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Maya Joshi",
        assigned_at: "30 Aug 2026, 09:30 AM"
      },
      futureBooking: {
        customer_name: "Kunal Mehta",
        checkin_time: "31 Aug 2026, 01:30 PM",
        priorityScore: 52
      }
    },

    {
      floorNo: 4,
      roomNo: 406,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Priya Desai",
        checkin_time: "24 Aug 2026, 03:05 PM",
        checkout_time: "30 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 4,
      roomNo: 407,
      status: "maintenance",
      roomType: "Single",
      priorityScore: null,
      maintenance: {
        work: "Electrical panel inspection",
        worker_name: "Imran Sheikh",
        required_time: "4 hours"
      }
    }
  ],

  floor5: [
    {
      floorNo: 5,
      roomNo: 501,
      status: "inspection",
      roomType: "Double",
      priorityScore: null,
      worker: {
        worker_name: "Arjun Rao",
        assigned_at: "30 Aug 2026, 10:00 AM"
      },
      futureBooking: {
        customer_name: "Pooja Iyer",
        checkin_time: "02 Sep 2026, 04:00 PM",
        priorityScore: 10
      }
    },

    {
      floorNo: 5,
      roomNo: 502,
      status: "available",
      roomType: "Single",
      priorityScore: null
    },

    {
      floorNo: 5,
      roomNo: 503,
      status: "occupied",
      roomType: "Double",
      priorityScore: 21,
      customer: {
        customer_name: "Siddharth Kulkarni",
        checkin_time: "27 Aug 2026, 02:00 PM",
        checkout_time: "03 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 5,
      roomNo: 504,
      status: "empty",
      roomType: "Single",
      priorityScore: null,
      emptyReason: "Missing linen replacement"
    },

    {
      floorNo: 5,
      roomNo: 505,
      status: "booked",
      roomType: "Double",
      priorityScore: 24,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "02 Sep 2026, 02:15 PM",
        checkout_time: "05 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 5,
      roomNo: 506,
      status: "cleaning",
      roomType: "Single",
      priorityScore: null
    },

    {
      floorNo: 5,
      roomNo: 507,
      status: "available",
      roomType: "Double",
      priorityScore: null
    }
  ],

  floor6: [
    {
      floorNo: 6,
      roomNo: 601,
      status: "empty",
      roomType: "Single",
      priorityScore: null,
      emptyReason: "Awaiting inspection"
    },

    {
      floorNo: 6,
      roomNo: 602,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Nisha Patel",
        checkin_time: "28 Aug 2026, 01:35 PM",
        checkout_time: "01 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 6,
      roomNo: 603,
      status: "available",
      roomType: "Single",
      priorityScore: 20
    },

    {
      floorNo: 6,
      roomNo: 604,
      status: "cleaning",
      roomType: "Double",
      priorityScore: null,
      worker: {
        worker_name: "Kavya Menon",
        assigned_at: "30 Aug 2026, 08:05 AM"
      },
      futureBooking: {
        customer_name: "Manav Sethi",
        checkin_time: "31 Aug 2026, 03:30 PM",
        priorityScore: 56
      }
    },

    {
      floorNo: 6,
      roomNo: 605,
      status: "inspection",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Ritesh Kumar",
        assigned_at: "30 Aug 2026, 11:45 AM"
      },
      futureBooking: {
        customer_name: "Tara Kapoor",
        checkin_time: "03 Sep 2026, 02:00 PM",
        priorityScore: 8
      }
    },

    {
      floorNo: 6,
      roomNo: 606,
      status: "available",
      roomType: "Double",
      priorityScore: null
    },

    {
      floorNo: 6,
      roomNo: 607,
      status: "booked",
      roomType: "Single",
      priorityScore: 23,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "31 Aug 2026, 02:15 PM",
        checkout_time: "04 Sep 2026, 11:00 AM"
      }
    }
  ],

  floor7: [
    {
      floorNo: 7,
      roomNo: 701,
      status: "available",
      roomType: "Double",
      priorityScore: null
    },

    {
      floorNo: 7,
      roomNo: 702,
      status: "maintenance",
      roomType: "Single",
      priorityScore: null,
      maintenance: {
        work: "Window lock replacement",
        worker_name: "Ravi Kumar",
        required_time: "1 hour"
      }
    },

    {
      floorNo: 7,
      roomNo: 703,
      status: "occupied",
      roomType: "Double",
      priorityScore: null,
      customer: {
        customer_name: "Rahul Bhatia",
        checkin_time: "25 Aug 2026, 04:45 PM",
        checkout_time: "31 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 7,
      roomNo: 704,
      status: "empty",
      roomType: "Single",
      priorityScore: null,
      emptyReason: "Room preparation required"
    },

    {
      floorNo: 7,
      roomNo: 705,
      status: "cleaning",
      roomType: "Double",
      priorityScore: 22,
      worker: {
        worker_name: "Zoya Ali",
        assigned_at: "30 Aug 2026, 07:30 AM"
      },
      futureBooking: {
        customer_name: "Anika Roy",
        checkin_time: "01 Sep 2026, 01:00 PM",
        priorityScore: 13
      }
    },

    {
      floorNo: 7,
      roomNo: 706,
      status: "available",
      roomType: "Single",
      priorityScore: null
    }
  ],

  floor8: [
    {
      floorNo: 8,
      roomNo: 801,
      status: "booked",
      roomType: "Double",
      priorityScore: 23,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "01 Sep 2026, 02:15 PM",
        checkout_time: "05 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 8,
      roomNo: 802,
      status: "occupied",
      roomType: "Single",
      priorityScore: null,
      customer: {
        customer_name: "Tanya Menon",
        checkin_time: "29 Aug 2026, 02:25 PM",
        checkout_time: "04 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 8,
      roomNo: 803,
      status: "available",
      roomType: "Double",
      priorityScore: 20
    },

    {
      floorNo: 8,
      roomNo: 804,
      status: "inspection",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Vivek Das",
        assigned_at: "30 Aug 2026, 09:50 AM"
      },
      futureBooking: {
        customer_name: "Rohan Suri",
        checkin_time: "04 Sep 2026, 02:30 PM",
        priorityScore: 6
      }
    },

    {
      floorNo: 8,
      roomNo: 805,
      status: "empty",
      roomType: "Double",
      priorityScore: null,
      emptyReason: "Minor repair pending"
    },

    {
      floorNo: 8,
      roomNo: 806,
      status: "available",
      roomType: "Single",
      priorityScore: null
    }
  ],

  floor9: [
    {
      floorNo: 9,
      roomNo: 901,
      status: "cleaning",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Maya Joshi",
        assigned_at: "30 Aug 2026, 08:25 AM"
      },
      futureBooking: {
        customer_name: "Neel Agarwal",
        checkin_time: "31 Aug 2026, 05:00 PM",
        priorityScore: 51
      }
    },

    {
      floorNo: 9,
      roomNo: 902,
      status: "available",
      roomType: "Double",
      priorityScore: null
    },

    {
      floorNo: 9,
      roomNo: 903,
      status: "occupied",
      roomType: "Single",
      priorityScore: 24,
      customer: {
        customer_name: "Karan Gupta",
        checkin_time: "26 Aug 2026, 05:20 PM",
        checkout_time: "30 Aug 2026, 11:00 AM"
      }
    },

    {
      floorNo: 9,
      roomNo: 904,
      status: "booked",
      roomType: "Double",
      priorityScore: 24,
      customer: {
        customer_name: "Aarav Mehta",
        checkin_time: "03 Sep 2026, 02:15 PM",
        checkout_time: "05 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 9,
      roomNo: 905,
      status: "maintenance",
      roomType: "Single",
      priorityScore: null,
      maintenance: {
        work: "Wardrobe hinge replacement",
        worker_name: "Suresh Patil",
        required_time: "90 minutes"
      }
    },

    {
      floorNo: 9,
      roomNo: 906,
      status: "available",
      roomType: "Double",
      priorityScore: null
    },

    {
      floorNo: 9,
      roomNo: 907,
      status: "empty",
      roomType: "Single",
      priorityScore: null,
      emptyReason: "Guest checkout; cleaning pending"
    }
  ],

  floor10: [
    {
      floorNo: 10,
      roomNo: 1001,
      status: "inspection",
      roomType: "Double",
      priorityScore: null,
      worker: {
        worker_name: "Arjun Rao",
        assigned_at: "30 Aug 2026, 10:35 AM"
      },
      futureBooking: {
        customer_name: "Simran Bedi",
        checkin_time: "02 Sep 2026, 03:00 PM",
        priorityScore: 10
      }
    },

    {
      floorNo: 10,
      roomNo: 1002,
      status: "available",
      roomType: "Single",
      priorityScore: null
    },

    {
      floorNo: 10,
      roomNo: 1003,
      status: "occupied",
      roomType: "Double",
      priorityScore: 21,
      customer: {
        customer_name: "Simran Kaur",
        checkin_time: "28 Aug 2026, 03:30 PM",
        checkout_time: "02 Sep 2026, 11:00 AM"
      }
    },

    {
      floorNo: 10,
      roomNo: 1004,
      status: "cleaning",
      roomType: "Single",
      priorityScore: null,
      worker: {
        worker_name: "Kavya Menon",
        assigned_at: "30 Aug 2026, 08:55 AM"
      },
      futureBooking: {
        customer_name: "Ishaan Khanna",
        checkin_time: "01 Sep 2026, 04:30 PM",
        priorityScore: 11
      }
    },

    {
      floorNo: 10,
      roomNo: 1005,
      status: "available",
      roomType: "Double",
      priorityScore: null
    },

    {
      floorNo: 10,
      roomNo: 1006,
      status: "empty",
      roomType: "Single",
      priorityScore: null,
      emptyReason: "Furniture replacement in progress"
    }
  ]
};

export default room_data;