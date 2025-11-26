import { useState, useEffect, useRef } from 'react';

const scrollSpeed = 20;
const offScreenThreshold = 355; // Fly to -355px total

function Footer() {
  const [flying, setFlying] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [rocketOffset, setRocketOffset] = useState(0);
  const animationFrameRef = useRef(null);
  const offsetRef = useRef(0);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (flying) return; // Prevent multiple clicks
    setFlying(true);
    setRocketOffset(0);
    offsetRef.current = 0;
  };

  useEffect(() => {
    if (!flying) return;

    let lastTime = performance.now();
    let scrollAmountTotal = 0; // Track total scroll distance
    let flyOffStartOffset = 0; // Where fly-off animation starts from
    let thresholdReachedTime = null; // When we reached the threshold
    const extraFlyTime = 750; // Continue flying for 750ms after threshold

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Calculate how much to move based on time elapsed (more consistent animation)
      const moveAmount = (scrollSpeed * deltaTime) / 16; // Normalize to 60fps baseline

      const currentScroll = window.scrollY;

      if (currentScroll > 0) {
        // Phase 1: Scrolling - move both window and rocket
        const scrollAmount = Math.min(moveAmount, currentScroll);
        window.scrollBy(0, -scrollAmount);

        // Accumulate total scroll to keep rocket in same viewport position
        scrollAmountTotal += scrollAmount;
        offsetRef.current = scrollAmountTotal;

        console.log('Scrolling - Offset:', offsetRef.current.toFixed(2), 'ScrollY:', currentScroll.toFixed(2));
      } else {
        // Phase 2: At top - continue flying off screen
        if (flyOffStartOffset === 0) {
          // Just reached top - save where we are to continue from here
          flyOffStartOffset = scrollAmountTotal;
          console.log('Reached top at offset:', flyOffStartOffset.toFixed(2), '- continuing to', offScreenThreshold);
        }

        // Continue increasing offset beyond scroll amount
        offsetRef.current += moveAmount;
        const flyOffDistance = offsetRef.current - flyOffStartOffset;

        console.log('Flying off - Total offset:', offsetRef.current.toFixed(2), 'Fly-off distance:', flyOffDistance.toFixed(2));

        // Check if we've reached threshold
        if (flyOffDistance >= offScreenThreshold && thresholdReachedTime === null) {
          thresholdReachedTime = currentTime;
          console.log('Threshold reached - continuing for', extraFlyTime, 'ms');
        }

        // Stop after flying for extraFlyTime ms past the threshold
        if (thresholdReachedTime !== null && (currentTime - thresholdReachedTime) >= extraFlyTime) {
          const finalPosition = -65 - offsetRef.current;
          console.log('Animation complete - rocket at:', finalPosition.toFixed(2) + 'px');
          setFlying(false);
          setResetting(true);
          // Keep rocket off-screen briefly, then reset
          setTimeout(() => {
            setRocketOffset(0);
            offsetRef.current = 0;
            setResetting(false);
          }, 100);
          return;
        }
      }

      // Update React state for rendering
      setRocketOffset(offsetRef.current);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [flying]);

  console.log('Render - Flying:', flying, 'Offset:', rocketOffset, 'Transform:', `translateY(-${rocketOffset}px)`);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Dennise Bartlett. All rights reserved.
          <br />
          Art by <a href="https://ko-fi.com/lillegume8563" alt="Aisfae" target="_blank">Aisfae</a>
        </p>
        <div className="landing-pad" />
        <button
          onClick={scrollToTop}
          className={"rocket " + (flying ? 'active ' : '') + (resetting ? 'resetting' : '')}
          style={{ '--rocket-offset': `${rocketOffset}px` }}
          aria-label="Scroll to top"
        />
      </div>
    </footer>
  );
}

export default Footer;
