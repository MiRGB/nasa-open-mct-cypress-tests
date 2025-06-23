const selectors = {
    successAlert: '.c-message-banner__message',
    notificationsNumberBar: 'button[aria-label="Review 1 Notification"]',
    notificationItem: 'div[role="listitem"]',
    notificationTitleText: 'Save successful',
    clearAllBtn: '.js-overlay__button'
};

class Notifications {
    get successAlert() {
        return cy.get(selectors.successAlert);
    }

    get notificationsNumberBar() {
        return cy.get(selectors.notificationsNumberBar);
    }

    get notificationItem() {
        return cy.get(selectors.notificationItem);
    }

    get notificationTitle() {
        return cy.contains('div', selectors.notificationTitleText);
    }

    get clearAllBtn() {
        return cy.get(selectors.clearAllBtn);
    }

    clearAllNotifications() {
        this.clearAllBtn.click();
    }

    openNotificationWindow() {
        this.notificationsNumberBar.click();
    }
}

export default new Notifications();
