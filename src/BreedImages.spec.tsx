import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BreedImages from './components/BreedImages';

const props = {
  title: "title1",
  images: ["images1.jpg", "images2.jpg"]
}

describe('<BreedImages />', () => {
  it('should render images and title correctly', () => {
    
    render(<BreedImages  {...props}/>);

    expect(screen.getByText('title1')).toBeInTheDocument()
    expect(props.images).toEqual(expect.arrayContaining(["images1.jpg","images2.jpg"]))

  });

  it('should send image url correctly when click in image', () => {
    const { container } = render(<BreedImages  {...props}/>)

    expect(container).toMatchSnapshot()

    // const selectImage = jest.fn()
  })
})

