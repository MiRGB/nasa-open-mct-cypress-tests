const selectors = {
    sinWaveGenName: 'input[id="form-name"]',
    sinWaveGenPeriod: 'input[aria-label="Period"]',
    sinWaveGenAmplitude: 'input[aria-label="Amplitude"]',
    sinWaveGenOffset: 'input[aria-label="Offset"]',
    sinWaveGenDataRate: 'input[aria-label="Data Rate (hz)"]',
};

class SineWaveGeneratorWindow {
    get sinWaveGenName() {
        return cy.get(selectors.sinWaveGenName);
    }

    get sinWaveGenPeriod() {
        return cy.get(selectors.sinWaveGenPeriod);
    }

    get sinWaveGenAmplitude() {
        return cy.get(selectors.sinWaveGenAmplitude);
    }

    get sinWaveGenOffset() {
        return cy.get(selectors.sinWaveGenOffset);
    }

    get sinWaveGenDataRate() {
        return cy.get(selectors.sinWaveGenDataRate);
    }

    get sinWaveGenCreateBtn() {
        return cy.contains('button', 'Ok');
    }

    fillName(name) {
        this.sinWaveGenName.clear().type(name);
    }

    fillPeriod(period) {
        this.sinWaveGenPeriod.clear().type(period);
    }

    fillAmplitude(amplitude) {
        this.sinWaveGenAmplitude.clear().type(amplitude);
    }

    fillOffset(offset) {
        this.sinWaveGenOffset.clear().type(offset);
    }

    fillDataRate(dataRate) {
        this.sinWaveGenDataRate.clear().type(dataRate);
    }

    createSinWaveGen() {
        this.sinWaveGenCreateBtn.click();
    }
}

export default new SineWaveGeneratorWindow();
