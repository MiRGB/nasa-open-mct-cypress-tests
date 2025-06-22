class SineWaveGeneratorWindow {
    get sinWaveGenName() {
        return cy.get('input[id="form-name"]');
    }

    get sinWaveGenPeriod() {
        return cy.get('input[aria-label="Period"]');
    }

    get sinWaveGenAmplitude() {
        return cy.get('input[aria-label="Amplitude"]');
    }

    get sinWaveGenOffset() {
        return cy.get('input[aria-label="Offset"]');
    }

    get sinWaveGenDataRate() {
        return cy.get('input[aria-label="Data Rate (hz)"]');
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