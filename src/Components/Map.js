import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from '@goongmaps/goong-js';
import '@goongmaps/goong-js/dist/goong-js.css';
import { Modal, Button } from 'react-bootstrap';

const Map = (props) => {
  const { hotelData } = props;
  const smallMapContainer = useRef(null);
  const largeMapContainer = useRef(null);
  const smallMap = useRef(null);
  const largeMap = useRef(null);
  const [showModal, setShowModal] = useState(false);

  // Danh sách các điểm (markers)
  const markers = hotelData ? hotelData.map((hotel) => ({
    lng: hotel.location.longitude,
    lat: hotel.location.latitude,
    title: hotel.hotelName,
  })) : [];

  useEffect(() => {
    if (!smallMap.current && markers.length > 0) {
      smallMap.current = new mapboxgl.Map({
        container: smallMapContainer.current,
        style: 'https://tiles.goong.io/assets/goong_map_web.json',
        center: [markers[0].lng, markers[0].lat], // Center of the first marker
        zoom: 16, // Initial zoom level
        minZoom: 14,
        maxZoom: 20, // Maximum zoom level
        bearing: 30,
        preserveDrawingBuffer: true,
        accessToken: '7vnAVNobyzY89uRMLrNuOkvwAQiUeKY1I7LwqLyA', // Replace with your access token
      });

      // Thêm các điểm (markers) và popup vào bản đồ
      markers.forEach((marker) => {
        const customMarker = new mapboxgl.Marker()
          .setLngLat([marker.lng, marker.lat])
          .addTo(smallMap.current);

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setText(marker.title)
        // .addTo(largeMap?.current);

        customMarker.setPopup(popup);
      });
    }
  }, [markers]);

  useEffect(() => {
    if (showModal && markers.length > 0) {
      largeMap.current = new mapboxgl.Map({
        container: largeMapContainer.current,
        style: 'https://tiles.goong.io/assets/goong_map_web.json',
        center: [markers[0].lng, markers[0].lat], // Center of the first marker
        zoom: 16, // Initial zoom level
        minZoom: 14,
        maxZoom: 20, // Maximum zoom level
        bearing: 30,
        preserveDrawingBuffer: true,
        accessToken: '7vnAVNobyzY89uRMLrNuOkvwAQiUeKY1I7LwqLyA', // Replace with your access token
      });

      markers.forEach((marker) => {
        const customMarker = new mapboxgl.Marker()
          .setLngLat([marker.lng, marker.lat])
          .addTo(largeMap.current);

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setText(marker.title)
        // .addTo(largeMap?.current);

        customMarker.setPopup(popup);
      });

      setTimeout(() => {
        largeMap.current.resize();
      }, 200); // Ensure the map resizes when the modal is fully open
    }

    return () => {
      if (largeMap.current) {
        largeMap.current.remove();
        largeMap.current = null;
      }
    };
  }, [showModal, markers]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (

    <div style={{ width: '100%', height: '100%' }}>
      {hotelData && hotelData.length > 0 ? (
        <>
          <div ref={smallMapContainer} />
          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Button variant="primary" onClick={openModal}>
              Hiển thị
            </Button>
          </div>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>Không có dữ liệu để hiển thị bản đồ.</p>
      )}

      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Bản đồ phóng lớn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={largeMapContainer} style={{ width: '100%', height: '80vh' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


  );
};

export default Map;
