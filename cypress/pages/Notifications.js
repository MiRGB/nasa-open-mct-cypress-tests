class Notifications {
    get successAlert() {
        return cy.get('.c-message-banner__message');
    }

    get notificationsNumberBar() {
        return cy.get('button[aria-label="Review 1 Notification"]');
    }

    get notificationItem() {
        return cy.get('div[role="listitem"]');
    }

    get notificationTitle() {
        return cy.contains('div', 'Save successful');
    }

    get clearAllBtn() {
        return cy.get('.js-overlay__button');
    }

    clearAllNotifications() {
        this.clearAllBtn.click();
    }

    openNotificationWindow() {
        this.notificationsNumberBar.click();
    }
}

export default new Notifications();