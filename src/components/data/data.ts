 const data: dataShape[] = [
    { image: "/image 38.svg", 
      description: "Furniture dinning table 5 sets Italian metal silk", 
      price: "₦398,120.00", 
      oldprice: "₦405,000.00", 
      discount: "-20%", 
      ratings: "943",
      index: "1"
    },
    { image: "/image 3.svg", 
        description: "3 sets of Sofa luxury chairs", 
        price: "₦521,00.00", 
        oldprice: "₦550,000.00", 
        discount: "-20%", 
        ratings: "803",
        index: "2",
      },
      { image: "/image 3 (1).svg", 
        description: "Exclusive royal dinning table made with famous Russia wood ", 
        price: "₦720,889.00", 
        oldprice: "₦900,889.00", 
        discount: "-38%", 
        ratings: "990",
        index: "3"
      },
      { image: "/image.svg", 
        description: "Italian king size 7 x7  bed", 
        price: "₦777,000.00", 
        oldprice: "₦877,000.00", 
        discount: "-10%", 
        ratings: "443",
        index: "4"
      },
      { image: "/image 3 (2).svg", 
        description: "6 x 5 imported mouka family bed", 
        price: "₦521,00.00", 
        oldprice: "₦550,000.00", 
        discount: "-20%", 
        ratings: "563",
        index: "5"
      },
      { image: "/image 3 (3).svg", 
        description: "Armchair luxury grey", 
        price: "₦198,120.00", 
        oldprice: "₦250,000.00", 
        discount: "-18%", 
        ratings: "443",
        index: "6"
      },
      { image: "/image 3 (5).svg", 
        description: "Sofa massaging bubble swing chair", 
        price: "₦150,800.00", 
        oldprice: "₦270,000.00", 
        discount: "-22%", 
        ratings: "990",
        index: "7"
      },
      { image: "/image 3 (6).svg", 
        description: "6 doors TV shelf", 
        price: "₦102,00.00", 
        oldprice: "₦259,000.00", 
        discount: "-20%", 
        ratings: "222",
        index: "8"
      },
      { image: "/image 3 (4).svg", 
        description: "Relaxation 3 seater bed", 
        price: "₦398,120.00", 
        oldprice: "₦405,000.00", 
        discount: "-20%", 
        ratings: "129",
        index: "9"
      },
      { image: "/armschair.svg", 
        description: "Multicolor arms chair luxury", 
        price: "₦289,000.00", 
        oldprice: "₦400,000.00", 
        discount: "-50%", 
        ratings: "892",
        index: "10"
      },
      { image: "/yellowchair.svg", 
        description: "2 single yellow chair with mini table", 
        price: "₦250,000.00", 
        oldprice: "₦550,000.00", 
        discount: "-55%", 
        ratings: "943",
        index: "11"
      },
      { image: "/animalchair.svg", 
        description: "Animal skin single chair remodelled", 
        price: "₦90,520.00", 
        oldprice: "₦180,000.00", 
        discount: "-50%", 
        ratings: "387",
        index: "12"
      }

]

  interface dataShape{
    image: string;
    description: string;
    price: string;
    oldprice: string;
    discount:string;
    ratings: string;
    index: string
}

export default data;