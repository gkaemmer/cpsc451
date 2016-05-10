import React, { Component } from 'react';
import { Provider } from 'react-redux';
import BookContainer from './BookContainer';
import Book from './Book';
import ImageGroup from './ImageGroup';
import Image from './Image';
import Credit from './Credit';
import wright1 from '../images/wright1.jpg';
import wright2 from '../images/wright2.jpg';
import wright3 from '../images/wright3.jpg';
import wright4 from '../images/wright4.jpg';
import orville from '../images/orville.jpg';
import wilbur from '../images/wilbur.jpg';
import dayton from '../images/dayton.jpg';
import killdevil1 from '../images/killdevil1.jpg';
import killdevil2 from '../images/killdevil2.jpg';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BookContainer>
          <Credit>Designed and built by <b>Graham Kaemmer</b></Credit>
          <Book name='Wright Brothers'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum architecto, animi a voluptatem quae laborum facere. Est, qui culpa cumque quidem. Facere sunt numquam tempore, nam voluptas? Eius, laboriosam!
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, corporis repudiandae blanditiis eveniet amet rerum dolor quaerat possimus recusandae sed praesentium porro vel beatae. Quas porro deleniti sed ut culpa.
            <ImageGroup id='group1'>
              <Image src={wright1} name="First Flight" description="On December 17, 1903, Wilbur Wright became the first person to successfully fly a heavier-than-air machine.">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum obcaecati ducimus quia molestias quos velit inventore ipsam maxime. Ad obcaecati mollitia explicabo dolorum, asperiores ea neque temporibus voluptatibus voluptatum repellendus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia fuga ipsum tempora inventore minus aliquid doloribus atque dolor dignissimos architecto sed ipsam ducimus ad, exercitationem beatae libero corrupti nesciunt sit!
                <ImageGroup id='group2'>
                  <Image src={wright2} name="Wright Flyer I" description="The first flying machine, the Flyer I, was the first iteration of motor-propelled gliders that the Wright Brothers had built.">
                    Even more content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti veritatis inventore quae quas dicta assumenda rem illum fuga. Ducimus, delectus, reiciendis. Et ex fuga, obcaecati deserunt cupiditate tempore delectus.
                  </Image>
                  <Image src={wright3} name="Kill Devil Hills" description="Kill Devil Hills, in Kitty Hawk, NC, was the hometown of the Wright Brothers' first flight.">
                    Even more content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti veritatis inventore quae quas dicta assumenda rem illum fuga. Ducimus, delectus, reiciendis. Et ex fuga, obcaecati deserunt cupiditate tempore delectus.
                    <ImageGroup id='group3'>
                      <Image src={killdevil1} description="Kill Devil Hills is located on the barrier islands called the Outer Banks of North Carolina" />
                      <Image src={killdevil2} description="Kill Devil Hills is known for its sand dunes, which the Wright Brothers famously took advantage of while building and testing their first airplanes." />
                    </ImageGroup>
                  </Image>
                </ImageGroup>
              </Image>
              <Image src={wright4} name="Orville and Wilbur Wright" description="Orville and Wilbur Wright, on the left and right respectively.">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto dolore facere magnam deserunt animi eius, accusamus numquam fugit voluptatum voluptate nesciunt, delectus ipsam eos quibusdam recusandae eligendi aut odit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quidem amet? Quis, cum. Perferendis soluta qui, voluptatibus voluptates eum suscipit magni. Rem architecto similique sed soluta, dolorem enim, eius doloribus!
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi unde beatae, omnis, dolorum necessitatibus impedit praesentium. Omnis consequatur, natus veritatis amet magni cumque aut dignissimos sed earum, autem sequi ea.
                <ImageGroup id='group4'>
                  <Image src={orville} />
                  <Image src={wilbur} />
                  <Image src={dayton} description="The home where Orville and Wilbur Wright grew up in Dayton, Ohio"/>
                </ImageGroup>
              </Image>
              <Image src={wright3} description="The Wright Flyer I was the first flying machine." />
            </ImageGroup>
          </Book>
        </BookContainer>
      </Provider>
    );
  }
}
