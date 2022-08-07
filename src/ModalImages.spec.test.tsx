import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalImages } from './components/ModalImages';

const props = {
  title: "title1",
  images: ["images1.jpg", "images2.jpg"]
}

describe('<ModalImages />', () => {
  it('should render images and title correctly', () => {
    
    render(<ModalImages  imageSelected="image-selected"/>);

    expect(screen.getByText('image-selected')).toBeInTheDocument()

  });
})

