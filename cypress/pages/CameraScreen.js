const selectors = {
    stopCameraBtn: 'button[aria-label="Pause automatic scrolling of image thumbnails"]',
    focusedImage: 'img[aria-label="Focused Image"]',
    previousImage: 'button[title="Previous image"]',
};

class CameraScreen {
    get stopCameraBtn() {
        return cy.get(selectors.stopCameraBtn);
    }

    get focusedImage() {
        return cy.get(selectors.focusedImage);
    }

    get previousImage() {
        return cy.get(selectors.previousImage);
    }

    compareImagesSrc() {
        // save first img `src`
        this.focusedImage
            .invoke('attr', 'src')
            .then((oldSrc) => {
    
            // change image
            this.previousImage.click();

            // check new `src` and verify
            this.focusedImage
                .invoke('attr', 'src')
                .should((newSrc) => {
                    expect(newSrc).to.not.equal(oldSrc);
                });
            });
    }

    stopCamera() {
        this.stopCameraBtn.click();
    }
}

export default new CameraScreen();