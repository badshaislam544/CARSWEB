// ============================================
// DriveX Motors — Messaging Component
// ============================================

window.DriveX = window.DriveX || {};

DriveX.Messaging = {
  render() {
    const conversations = DriveX.messages;
    return `
    <div class="glass-card rounded-2xl overflow-hidden" style="height: 600px;">
      <div class="flex h-full">
        <!-- Conversations List -->
        <div class="w-full sm:w-80 border-r border-white/5 flex flex-col" id="conv-list-panel">
          <div class="p-4 border-b border-white/5">
            <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              Messages
            </h3>
            <input type="text" placeholder="Search conversations..." class="form-input text-sm py-2">
          </div>
          <div class="flex-1 overflow-y-auto">
            ${conversations.map((conv, i) => `
              <div class="conv-item flex items-center gap-3 p-4 cursor-pointer hover:bg-[#ff6b00]/5 transition-colors border-b border-white/5 ${i === 0 ? 'bg-[#ff6b00]/5' : ''}" data-conv="${conv.id}">
                <div class="relative flex-shrink-0">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${DriveX.getAvatarColor(conv.sender)}">${DriveX.getInitials(conv.sender)}</div>
                  ${conv.online ? '<div class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>' : ''}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold truncate">${conv.sender}</span>
                    <span class="text-[10px] opacity-40 flex-shrink-0">${conv.messages[conv.messages.length - 1].time}</span>
                  </div>
                  <p class="text-xs opacity-50 truncate mt-0.5">${conv.messages[conv.messages.length - 1].text}</p>
                </div>
                ${conv.unread > 0 ? `<span class="w-5 h-5 rounded-full bg-[#ff6b00] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">${conv.unread}</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Chat Area -->
        <div class="hidden sm:flex flex-col flex-1" id="chat-panel">
          <div class="p-4 border-b border-white/5 flex items-center gap-3" id="chat-header">
            <button class="sm:hidden p-2 hover:bg-white/5 rounded-lg" id="back-to-list">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div class="relative">
              <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${DriveX.getAvatarColor(conversations[0].sender)}">${DriveX.getInitials(conversations[0].sender)}</div>
              ${conversations[0].online ? '<div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>' : ''}
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold" id="chat-name">${conversations[0].sender}</p>
              <p class="text-xs opacity-50" id="chat-status">${conversations[0].lastSeen}</p>
            </div>
            <div class="flex gap-2">
              <button class="p-2 rounded-lg hover:bg-white/5 transition-colors"><svg class="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></button>
              <button class="p-2 rounded-lg hover:bg-white/5 transition-colors"><svg class="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg></button>
            </div>
          </div>

          <!-- Messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages">
            ${conversations[0].messages.map(msg => `
              <div class="flex ${msg.sent ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[75%]">
                  <div class="${msg.sent ? 'chat-bubble-sent' : 'chat-bubble-received'} px-4 py-2.5 text-sm">
                    ${msg.text}
                  </div>
                  <div class="flex items-center gap-1 mt-1 ${msg.sent ? 'justify-end' : 'justify-start'}">
                    <span class="text-[10px] opacity-30">${msg.time}</span>
                    ${msg.sent ? `<svg class="w-3.5 h-3.5 ${msg.read ? 'text-blue-400' : 'opacity-30'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Typing indicator -->
          <div class="px-4 py-1 hidden" id="typing-indicator">
            <div class="typing-indicator flex items-center gap-2 text-xs opacity-50">
              <span></span><span></span><span></span>
              <span class="ml-1">typing...</span>
            </div>
          </div>

          <!-- Message Input -->
          <div class="p-4 border-t border-white/5">
            <div class="flex items-center gap-3">
              <button class="p-2 rounded-lg hover:bg-white/5 transition-colors">
                <svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
              </button>
              <input type="text" placeholder="Type a message..." class="form-input text-sm py-2.5 flex-1" id="chat-message-input">
              <button class="btn-primary py-2.5 px-4 ripple" id="send-message-btn">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },

  init() {
    const messageInput = document.getElementById('chat-message-input');
    const sendBtn = document.getElementById('send-message-btn');
    const messagesDiv = document.getElementById('chat-messages');

    if (sendBtn && messageInput) {
      const sendMessage = () => {
        const text = messageInput.value.trim();
        if (!text) return;
        const msgHTML = `
          <div class="flex justify-end">
            <div class="max-w-[75%]">
              <div class="chat-bubble-sent px-4 py-2.5 text-sm">${text}</div>
              <div class="flex items-center gap-1 mt-1 justify-end">
                <span class="text-[10px] opacity-30">Just now</span>
                <svg class="w-3.5 h-3.5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
            </div>
          </div>`;
        messagesDiv.insertAdjacentHTML('beforeend', msgHTML);
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Simulate typing and reply
        const typingEl = document.getElementById('typing-indicator');
        if (typingEl) {
          typingEl.classList.remove('hidden');
          setTimeout(() => {
            typingEl.classList.add('hidden');
            const replies = ['Thanks for your message! Let me check on that for you.', 'Great question! I\'ll get back to you shortly.', 'Absolutely, I can help with that! 👍', 'Let me look into this and respond within the hour.'];
            const reply = replies[Math.floor(Math.random() * replies.length)];
            const replyHTML = `
              <div class="flex justify-start">
                <div class="max-w-[75%]">
                  <div class="chat-bubble-received px-4 py-2.5 text-sm">${reply}</div>
                  <div class="flex items-center gap-1 mt-1 justify-start">
                    <span class="text-[10px] opacity-30">Just now</span>
                  </div>
                </div>
              </div>`;
            messagesDiv.insertAdjacentHTML('beforeend', replyHTML);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
          }, 2000);
        }
      };

      sendBtn.addEventListener('click', sendMessage);
      messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
      });
    }

    // Conversation switching
    document.querySelectorAll('.conv-item').forEach(item => {
      item.addEventListener('click', () => {
        const convId = parseInt(item.getAttribute('data-conv'));
        const conv = DriveX.messages.find(c => c.id === convId);
        if (!conv) return;

        document.querySelectorAll('.conv-item').forEach(c => c.classList.remove('bg-[#ff6b00]/5'));
        item.classList.add('bg-[#ff6b00]/5');

        const chatName = document.getElementById('chat-name');
        const chatStatus = document.getElementById('chat-status');
        if (chatName) chatName.textContent = conv.sender;
        if (chatStatus) chatStatus.textContent = conv.lastSeen;

        if (messagesDiv) {
          messagesDiv.innerHTML = conv.messages.map(msg => `
            <div class="flex ${msg.sent ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[75%]">
                <div class="${msg.sent ? 'chat-bubble-sent' : 'chat-bubble-received'} px-4 py-2.5 text-sm">${msg.text}</div>
                <div class="flex items-center gap-1 mt-1 ${msg.sent ? 'justify-end' : 'justify-start'}">
                  <span class="text-[10px] opacity-30">${msg.time}</span>
                  ${msg.sent ? `<svg class="w-3.5 h-3.5 ${msg.read ? 'text-blue-400' : 'opacity-30'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>` : ''}
                </div>
              </div>
            </div>
          `).join('');
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        // Mobile: show chat panel
        const chatPanel = document.getElementById('chat-panel');
        const listPanel = document.getElementById('conv-list-panel');
        if (window.innerWidth < 640) {
          chatPanel?.classList.remove('hidden');
          chatPanel?.classList.add('flex');
          listPanel?.classList.add('hidden');
        }
      });
    });

    // Mobile back button
    document.getElementById('back-to-list')?.addEventListener('click', () => {
      const chatPanel = document.getElementById('chat-panel');
      const listPanel = document.getElementById('conv-list-panel');
      chatPanel?.classList.add('hidden');
      listPanel?.classList.remove('hidden');
    });
  }
};
