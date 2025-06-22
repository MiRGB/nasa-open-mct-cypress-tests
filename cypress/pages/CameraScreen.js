class CameraScreen {
    get stopCameraBtn() {
        return cy.get('button[aria-label="Pause automatic scrolling of image thumbnails"]');
    }

    get focusedImage() {
        return cy.get('img[aria-label="Focused Image"]');
    }

    get previousImage() {
        return cy.get('button[title="Previous image"]');
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