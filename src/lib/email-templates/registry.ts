import type { ComponentType } from 'react'
import { template as contactConfirmation } from './contact-confirmation'
import { template as contactNotification } from './contact-notification'
import { template as membershipWelcome } from './membership-welcome'
import { template as membershipNotification } from './membership-notification'
import { template as rsvpConfirmation } from './rsvp-confirmation'
import { template as rsvpNotification } from './rsvp-notification'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string
}

/**
 * Template registry — maps template names to their React Email components.
 * Import and register new templates here after creating them in this directory.
 *
 * Example:
 *   import { template as welcomeTemplate } from './welcome'
 *   // then add to TEMPLATES: 'welcome': welcomeTemplate
 */
export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-confirmation': contactConfirmation,
  'contact-notification': contactNotification,
  'membership-welcome': membershipWelcome,
  'membership-notification': membershipNotification,
  'rsvp-confirmation': rsvpConfirmation,
  'rsvp-notification': rsvpNotification,
}
