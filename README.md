  <Row className="d-flex justify-content-around">
        <Col sm="12" className=" d-flex justify-content-center">
          <AliceCarousel
            responsive={res}
            autoPlayInterval={3000}
            autoPlayDirection="rtl"
            autoPlay={true}
            infinite={true}
            mouseTracking
            disableButtonsControls={true}>
            <ProductCard title="1" />
            <ProductCard title="2" />
            <ProductCard title="3" />
            <ProductCard title="4" />
            <ProductCard title="5" />
            <ProductCard title="6" />
            <ProductCard title="7" />
          </AliceCarousel>
        </Col>
      </Row>

const res = {
300: { items: 1 },
650: { items: 2 },
1100: { items: 3 },
1200: { items: 4 },
};
