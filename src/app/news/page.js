'use client'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const News = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Sample news data
  const newsData = [
    {
      date: 'August 09, 2023',
      title: 'Future of restaurants: Do you want automation with that?',
      shortDescription: `Deloitte's 2023 report, “The future of restaurants: The new normal and beyond” found that many preferences that emerged during the pandemic are here to stay. This miniseries delves into two of those trends: the rise in takeout and the use of automation in the industry.`,
      longDescription: `Automation and technology solutions introduced during the pandemic have been largely well received, and will likely continue to be adopted by more restaurants over time. Guests are not deterred by automation and would continue to patronize restaurants that use these innovations. Comfort with these technologies is significantly higher among younger demographics: on average, consumers ages 18 to 38 are 16 points more likely to return to restaurants that use automation technologies. 
                        Changing delivery models 
                        Customers are increasingly comfortable with drones and driverless car delivery options, with 47 percent saying they would order from a restaurant that offered this type of delivery, a 3 percent rise from last year. Voice-automated ordering systems continue to be widely accepted, with 79 percent of participants at least somewhat likely to return to a restaurant that uses automated voice systems for drive-thru, 74 percent for phone systems, and 70 percent for dine-in use. Some other key findings:

                        53 percent of respondents receive contactless delivery more than half of the time.
                        60 percent of surveyed consumers report being somewhat likely to order from a kitchen that prepares food, at least in part, through robotic technologies—up from 54 percent in 2021.
                        19 percent said they had experienced a cashier-less restaurant (i.e., a digital order-only location), and 62 percent reported being somewhat likely to order from one.

                        Rise in automation
                        Going forward, computerization and mechanization won’t be limited to consumer-facing technologies. Staff can expect more technology integration in their roles for tasks like food temperature and machinery monitoring, as well as predicting equipment maintenance needs. These technologies can upgrade the customer experience by enhancing food safety and quality and improving order preparation consistency and menu item availability. Technological advances could also lead to a greater focus on labor efficiency.

                        With a tight labor market, increasing minimum wages, and growing union pressures, there will likely be greater scrutiny over which tasks must be completed by workers, as opposed to technology. This could either result in lighter restaurant staffing or shifting staff roles toward more customer service-oriented responsibilities.


                        Challenges ahead
                        Robotics and automation can be a costly investment, especially for large-scale quick-service chains. Restaurants have also been challenged by inflation and have had to increase prices to offset costs. As they consider where and how to invest in these new technologies, they should weigh the potential returns and be cognizant that any investment may limit their ability to keep prices stable.`,
      image: 'Assets/news/news1.jpg',
    },
    {
      date: 'September 04, 2023',
      title: 'Create an Exponential Impact on Hospitality With Service Robots',
      shortDescription: 'Revolutionize hospitality through robotics.',
      longDescription: `Hospitality is slow to adopt new innovations, and the industry needs to realize the benefits of robotics to remain competitive.
                        Exponential IT is creating pressure on industry leaders to remain competitive, and keeping up with the fast pace of industry trends and vendors is difficult.
                        Operators have been challenged with labor shortages for years, causing the quality of service to decline.
                        Increased costs and decreased demand have squeezed margins for operators.
                        Our Advice
                        Critical Insight
                        Service robots are a valuable technology investment in the hospitality industry. Their efficient futuristic use and contactless strategies combat long-standing industry challenges and will help sustains the business.

                        Impact and Result
                        Develop vendor requirements and a shortlist of vendors that best fit the needs of the business by:

                        Determining knock-out criteria eliminating vendors that do not meet the business use case needs.
                        Adjusting vendor and product weightings across various suitability factors for the overall vendor ranking.
                        Assessing the importance of advanced features to determine the best-fit vendor.`,
      image: 'Assets/news/news2.jpg',
    },
    {
      date: 'January 27, 2024',
      title: 'California restaurant incorporates kitchen robots and AI',
      shortDescription: `It's long since been the vision of Hollywood that robots and humans would be side-by-side. In some Hollywood films, this partnership is a recipe for catastrophe, but in this suburb not far from Tinseltown, AI and robots are working in a restaurant kitchen.`,
      longDescription: `The restaurant, called CaliExpress, can be found in the heart of Pasadena, California. It's the first time that so much technology has been in one place, according to business owner Vic Aulakh. 
                        The burger joint uses a grill robot by Cucina and "Flippy," a robot from Miso Robotics that can handle frying. Both robots can make quite a lot of food: Flippy can make 250 pounds of French fries an hour, and the grill robot can cook about 100 patties in that time. Neither machine needs a break or a day off. 
                        "We can't get enough people to come out and work on the fryer and grills," Aulakh said. "They're dangerous jobs and this automation helps solve a lot of those issues we're having." 
                        Flippy can also be found in chain restaurants like White Castle and Jack in the Box. Rob Anderson, a co-founder of Miso Robotics, said that the company started working on the automaton six years ago. 
                        The kitchen of CaliExpress.
                        CBS SATURDAY MORNING
                        "Flippy is really good at repetitive tasks like operating the fryer in those dangerous environments," Anderson said. "That way, the people working the restaurant can focus on the human element." 
                        CaliExpress isn't just using robot chefs. The ordering system at the restaurant is powered by artificial intelligence and uses facial recognition software run by Pop ID to keep track of food choices and payment. The technology's creator says that the system is not used for surveillance. 
                        There will be some human employees at CaliExpress, too. The restaurant plans on only hiring two "back of house" employees to put finishing touches on a meal. That's a fraction of hiring for a non-automated kitchen. In a state where the minimum wage for fast food workers will soon be $20 an hour, having less people to pay can be a bonus for businesses. 
                        "It does reduce some jobs, but there's so many more jobs created with the technology as well as maintaining this technology," Aulakh said. 
                        A study published this week by researchers at MIT found that just a small amount of jobs could be done by AI, but in most cases, it doesn't make economic sense to use AI to do the necessary work. 
                        However, a December 2023 government report listed AI as a threat to financial stability. One study found that 82% of restaurant jobs could be handled by robotics, an important statistic in an industry that often struggles with understaffing. 
                        Both robots are rented, and technicians monitor them 24/7. Those technicians can take over cooking if something goes wrong with the robots during meal times. 
                        "If for any reason Flippy's not working, they can flip the barrier up and cook manually as they would normally," Anderson said. 
                        Aulakh said that hopefully, the robots will also affect the taste of the restaurant's food - for the better. 
                        "Now, each burger is being cooked precisely the same way every time," Aulakh said.`,
      image: 'Assets/news/news3.jpg',
    },
    {
      date: 'June 11, 2024',
      title: 'Restaurant robots can cook, serve and bus your meal now',
      shortDescription: `Restaurants are placing big, experimental bets on robots that stir-fry, flip burgers, mix drinks, cook ramen, bake pizza, deliver meals to diners and whisk away the dirty dishes.`,
      longDescription: `Why it matters: Worker shortages and inflation continue to bedevil the restaurant industry — even as it enjoys record sales.
                        Robots, tech and AI are seen as potential saviors, boosting efficiency and revenue.
                        Driving the news: At the National Restaurant Association's recent big annual show in Chicago, tech companies showed up in force selling labor-saving robotics.
                        Among the winners of the association's kitchen innovation awards: the "PizzaBot," which boasts that it can "accurately dispense your most expensive and labor-intensive toppings."
                        Another was I-Robo2, a robotic stir-fry machine that can prepare 30 meals an hour.
                        And then there's the Alpha Grill, which can cook 200 hamburger patties an hour — and then clean itself.
                        At left, a robot serving meals on a tray; at right, a stir-frying robot.
                        At left, the Servi food service robot from Bear Robotics. At right, the I-Robot2, which walks a human attendant through all the steps of making a stir-fry dish. Photos: Clifford A. Sobel for Axios
                        Also on display were a ramen vending machine and an AI robot that can automatically season and package french fries, tater tots and chicken fingers.
                        And then there was Voglebot, which bills itself as an all-in-one automated fry cook that can simultaneously make fries, chicken fingers, etc. (See a video.)
                        Droids that trundle into the dining room to serve food — or take dirty plates back to the kitchen — were also on ample display.
                        Examples include the 4-foot-tall Dinerbot from Keenon, which has three serving trays and can carry up to 88 pounds, and the Servi from Bear Robotics, which can carry two trays and a tub for used dishes.
                        A large kitchen robotics system with two men standing around it.
                        The Robo-Cook uses mechanical arms to fry foods on the left and grill burgers and other foods on the right. Photo: Clifford A. Sobel for Axios
                        How it works: The I-Robo stir-fry robot is being used in Japan, where one of the country's largest Chinese food chains has two or three in each of its kitchens, says manufacturer TechMagic.
                        A touchscreen next to the stir-fry bowl pulls up a menu of recipes for a human cook to follow, such as fried rice or chicken with vegetables.
                        It prompts the human to place the ingredients — oil, rice, vegetables, etc., some of them pre-measured — into the heated bowl.
                        The bowl spins and rotates, mixing and heating the ingredients, creating a meal in 2-3 minutes. (See it cook kung pao chicken.)
                        When finished, the unit cleans itself.
                        Yes, but: These first-generation machines are cool and futuristic, but some are prone to malfunction and other problems.
                        They're often not as efficient or effective as the human hands and brains they replace.
                        Case study: A richly funded Silicon Valley pizza robotics company called Zume shut down last year, in part because it couldn't keep the cheese from sliding off the pizza as it progressed along the line.
                        What they're saying: "There's no doubt the future looks like more robotics in the kitchen," Michelle Korsmo, CEO of the National Restaurant Association, tells Axios.
                        "It's a question of whether robotics are in the dining room itself," she said. "It depends a lot on the particular restaurant and what experience they're trying to bring."
                        Restaurateurs, she said, "are excited about what technology can bring in learning more about their customers and making their businesses more efficient."
                        And "the rise of technology in the dining experience is becoming increasingly a part of daily life for all customers."
                        A ramen vending machine is attended by two women.
                        This ramen vending machine has made inroads in college dorms and corporate cafeterias. Photo: Clifford A. Sobel for Axios
                        Zoom out: Some big names in the restaurant industry are going all in on robotics.
                        Sweetgreen in 2021 acquired a robotic food-prep startup called Spyce and, two years later, opened its own automated restaurant called Infinite Kitchen.
                        The founder of Chipotle, Steve Ells, has started a takeout chain called Kernel where the robots do most of the cooking.
                        Between the lines: Robot cooks and servers are showy baubles that may mask where restaurant technology is making the biggest impact: in back-end systems.
                        New systems use AI to improve order-taking, inventory management, staff scheduling and home delivery.
                        AI-driven marketing and social media systems are helping restaurants reel in customers — and bring back regulars — with targeted promotional offers for people's favorite dishes and other specials.
                        At left, the Voglebot is a robot all-in-one kitchen; at right, a machine that custom prints cookies.
                        At left, the Voglebot is an all-in-one automated fry cook. At right, a tabletop robot can custom-print cookies. Photos: Jennifer A. Kingson for Axios
                        More sophisticated apps allow diners to customize their meals more than ever.
                        "Regardless of what you hear about QR-code resistance, customers are comfortable and want these options," Korsmo said. "And we're talking about customers of all ages."
                        Fun fact: "Dashboard dining" is a buzz phrase in restaurant circles, as more consumers eat meals in their cars.
                        A lot of innovation is happening at the drive-thru, where AI voice bots take your order and recommend items to go with it.
                        The bottom line: Interacting with people — a helpful server, or charming maitre d' — is part of the fun of eating out.
                        "There's no doubt that technology can only go so far," Korsmo said. "What makes a restaurant great and what attracts people to come to restaurants is that 'high touch' aspect."`,
      image: 'Assets/news/news4.jpg',
    }
    // Add more news objects as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div data-theme="light" className="bg-white">
      {isMobile ? (
        // Mobile view
        <div className="grid grid-cols-1 gap-y-10 w-[80%] pt-10 pb-10 m-auto">
          {newsData.map((news, index) => (
            <Link key={index} href={{
              pathname: '/newsdetailed',
              query: {
                title: news.title,
                shortDescription: news.shortDescription,
                longDescription: news.longDescription,
                image: news.image,
              },
            }}>
              <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
                <figure>
                  <img src={news.image} alt="News" />
                </figure>
                <div className="card-body">
                  <div className="flex flex-row">
                    <FontAwesomeIcon icon={faClock} className="h-5 mr-2" />
                    <b>{news.date}</b>
                  </div>
                  <p>{news.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Desktop view
        <div className="grid grid-cols-3 gap-y-10 w-[70%] m-auto pt-10 pb-10">
          {newsData.map((news, index) => (
            <Link key={index} href={{
              pathname: '/newsdetailed',
              query: {
                title: news.title,
                shortDescription: news.shortDescription,
                longDescription: news.longDescription,
                image: news.image,
              },
            }}>
              <div className="card w-[90%] h-[100%] bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
                <figure>
                  <img src={news.image} alt="News" />
                </figure>
                <div className="card-body">
                  <div className="flex flex-row">
                    <FontAwesomeIcon icon={faClock} className="h-5 mr-2" />
                    <b>{news.date}</b>
                  </div>
                  <p>{news.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;