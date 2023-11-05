import Head from 'next/head';
import React from 'react';
import Cursor from '../components/Cursor';

// Define your VideoComponent
const VideoComponent = () => {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '10px', 
        right: '10px', 
        zIndex: 1000,
        border: '2px solid red' // This will make the border visible
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '5px', color: '#FFF' }}>My Story So Far</div>
      <video
        src="public/personalsite.mp4" // Ensure this path is correct
        style={{ width: '200px', height: 'auto' }}
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default function Home() {
  // Styles for your links
  const linkStyle = {
    fontSize: '2rem',
    margin: '1rem',
    color: '#FFFFFF',
    textDecoration: 'underline',
  };

  // Styles for centered text
  const centeredTextStyle = {
    fontSize: '4rem',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  // Styles for the section where the links are
  const centeredSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  };

  return (
    <>
    
      <Head>
        <title>Jared M.</title>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background: #000; 
            color: #FFF; 
          /* Additional global styles can be placed here */
        `}</style>
        
      </Head>
      
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          
          <nav className="flex justify-between font-medium">
            {/* Navigation links or logo */}
          </nav>
        </div>
      </header>
      
      <section className="text-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Cursor/>
        <h1 style={{ ...centeredTextStyle, fontFamily: 'Trebuchet MS' }}>Hi, I'm Jared M.</h1>
        <h2 style={centeredTextStyle}>Thanks for coming to my site</h2>
        
      </section>
      <section style={centeredSectionStyle}>
        <a href="/resume" style={linkStyle}>Resume</a>
        <a href="/linkedin" style={linkStyle}>LinkedIn</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </section>
      <VideoComponent />
      {/* This is where the video will be displayed */}
      {/* Footer and any other content */}
    </>
    
  );
}
