// UI Enhancement and Animations

// Add smooth transitions and visual feedback
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to difficulty buttons
    const difficultyButtons = document.querySelectorAll('.difficulty-button');
    difficultyButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-4px) scale(1.02)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to quit/back to menu
        if (e.key === 'Escape') {
            const currentScreen = document.querySelector('.screen.active').id;
            if (currentScreen === 'gameScreen') {
                if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
                    quitToMenu();
                }
            } else if (currentScreen === 'resultsScreen') {
                quitToMenu();
            }
        }

        // Enter to restart from results
        if (e.key === 'Enter' && document.getElementById('resultsScreen').classList.contains('active')) {
            startTypingTest(gameState.currentLevel);
        }
    });

    // Add visual feedback on typing
    const typingInput = document.getElementById('typingInput');
    if (typingInput) {
        typingInput.addEventListener('input', () => {
            // Flash border on error
            if (gameState.errors > 0 && gameState.currentIndex > 0) {
                const lastChar = typingInput.value[typingInput.value.length - 1];
                const expectedChar = gameState.currentText[typingInput.value.length - 1];

                if (lastChar !== expectedChar) {
                    typingInput.style.borderColor = '#ff3d3d';
                    typingInput.style.boxShadow = '0 0 20px rgba(255, 61, 61, 0.5)';
                    setTimeout(() => {
                        typingInput.style.borderColor = '';
                        typingInput.style.boxShadow = '';
                    }, 200);
                }
            }
        });
    }
});

// Progress animation
function animateProgress() {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.transition = 'width 0.2s ease';
    }
}

// Confetti effect on completion (simple version)
function celebrateCompletion() {
    if (gameState.accuracy === 100 && gameState.wpm >= 60) {
        // Add celebration class to results screen
        const resultsPanel = document.querySelector('.results-panel');
        if (resultsPanel) {
            resultsPanel.style.animation = 'celebratePulse 0.5s ease';
        }
    }
}

// Initialize animations
window.addEventListener('load', animateProgress);
